import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardStyled } from './styles';

export default function Card({
  name, id, image,
}) {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.memoryGame);
  const cardId = useSelector((state) => state.memoryGame.cardsSelected.map((f) => f.id));
  const selectCard = () => {
    if (cardState.numberOfCards == 2) return;
    dispatch({ type: 'CARD_SELECT', payload: { name, id } });
  };

  return (
    <CardStyled className="card" onClick={() => selectCard()}>
      <div className={`flip ${cardState.numberOfCards > 0 && cardId.includes(id) || cardState.cardHistory.includes(id) ? 'selected' : ''}`}>
        <div className="front-card">
          <img className="front-image" src={image} alt="" />
        </div>
        <div className="back-card">
          <img className="back-image" src="https://image.flaticon.com/icons/svg/2892/2892556.svg" alt="" />
        </div>
      </div>
    </CardStyled>
  );
}
