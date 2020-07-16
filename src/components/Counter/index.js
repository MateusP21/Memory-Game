import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const dispatch = useDispatch();
  const chronometerStart = useSelector((state) => state.memoryGame.chronometerStart);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let interval = null;
    if (chronometerStart) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      if (seconds === 60) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
      } else {
        const finished = `${minutes}m :${seconds}s`;
        dispatch({ type: 'TIME', finishedTime: finished });
      }
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>

      {minutes}
      m :
      {' '}
      {seconds}
      s

    </div>
  );
}
