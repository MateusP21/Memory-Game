import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegHandPointer, FaClock } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { RankingContainer } from './styles';
import firebase from '../../utils/firebaseUtils';
import LoadingAnimation from '../../lotties/7861-loading-animation.json';

function Ranking() {
  const [userRanking, setUserRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.user.userInfo[0]);
  const db = firebase.firestore();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,

  };
  async function getData() {
    if (userInfo) {
      const snapshot = await db.collection('Partida').where('user', '==', userInfo.displayName).get();
      setUserRanking(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [userInfo]);
  return (
    <RankingContainer>
      <h4>{userInfo && userInfo.displayName}</h4>
      <ul>

        {
          loading ? <Lottie options={defaultOptions} />
            : userRanking.map((item, index) => (
              <li key={index}>

                <p>
                  <FaRegHandPointer />
                  {item.moves}

                </p>
                <p>
                  <FaClock />
                  {item.time}

                </p>

              </li>
            ))
      }

      </ul>

    </RankingContainer>
  );
}

export default Ranking;
