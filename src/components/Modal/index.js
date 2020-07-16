import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer } from './styles';

function Modal() {
  const dispatch = useDispatch();
  const moves = useSelector((state) => state.memoryGame.moves);
  return (
    <ModalContainer>
      <div className="content">
        <h1>Parabéns</h1>
        <p>Fantastico !!! Você acertou todas as cartas</p>
        <p>
          Terminou com apenas
          {' '}
          {moves}
          {' '}
          movimentos
        </p>
        <button type="button" onClick={() => dispatch({ type: 'RESET_GAME' })}>Jogar de novo</button>
      </div>
    </ModalContainer>
  );
}

export default Modal;
