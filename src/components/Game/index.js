import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../Card';
import Modal from '../Modal';
import Counter from '../Counter';
import 'react-toastify/dist/ReactToastify.css';
import gameData from '../../db.json';
import firebase from '../../utils/firebaseUtils';
import Ranking from '../Ranking';

export default function Game() {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.memoryGame);
  const userInfo = useSelector((state) => state.user.userInfo[0]);
  const [game, setGame] = useState([]);

  useEffect(() => {
    function shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      setGame(array);
    }

    function duplicate(arr) {
      const arrayDuplicate = arr.flatMap((item) => [{ ...item, id: uuidv4() }, { ...item, id: uuidv4() }]);
      return arrayDuplicate;
    }
    shuffle(duplicate(gameData));
  }, []);

  function verifiedCards() {
    cardState.moves === 1 && dispatch({ type: 'CHRONOMETER_START' });
    if (game.length > 0 && cardState.cardHistory.length == game.length) {
      const db = firebase.firestore();

      setTimeout(() => {
        dispatch({ type: 'CHRONOMETER_STOP' });
        db.collection('Partida').add({
          user: userInfo.displayName,
          moves: cardState.moves,
          time: cardState.time,
          timestamp: new Date(),
        });
        dispatch({ type: 'OPEN_MODAL' });
      }, 1000);
    }

    if (cardState.numberOfCards == 0) return;
    if (cardState.cardsSelected[0].name == cardState.cardsSelected[1].name
      && cardState.cardsSelected[0].id != cardState.cardsSelected[1].id) {
      setTimeout(() => {
        dispatch({ type: 'SET_HISTORY' });

        dispatch({ type: 'CLEAR' });
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch({ type: 'MOVES' });
        dispatch({ type: 'CLEAR' });
      }, 1000);
    }
  }

  useEffect(() => verifiedCards(), [cardState.numberOfCards == 2]);

  return (

    <>

      <div className="board">

        {

        (cardState.openModal && <Modal />)
        }
        {game
        && game.map((card) => (

          <Card id={card.id} name={card.name} image={card.photo_url} key={card.id} />

        ))}
      </div>
      <div className="scoreboard">

        <ul>

          <li>
            <span>

              {cardState.moves}

            </span>
            Movimentos

          </li>

          <li>
            <span>

              <Counter />

            </span>
            Tempo

          </li>
        </ul>

      </div>
      <Ranking />
    </>
  );
}
