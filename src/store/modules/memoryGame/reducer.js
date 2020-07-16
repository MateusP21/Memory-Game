import produce from 'immer';

const INITIAL_STATE = {
  cardsSelected: [],
  cardHistory: [],
  numberOfCards: 0,
  moves: 0,
  openModal: false,
  time: '',
  finishedGame: false,
  chronometerStart: '',
};
export default function memoryGame(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CARD_SELECT':
      return produce(state, (draft) => {
        draft.cardsSelected.push(action.payload);
        draft.numberOfCards = draft.cardsSelected.length;
      });
    case 'CLEAR': {
      return produce(state, (draft) => {
        draft.numberOfCards = 0;
        draft.cardsSelected = [];
      });
    }
    case 'MOVES':
      return produce(state, (draft) => {
        draft.moves++;
      });

    case 'TIME':
      return produce(state, (draft) => {
        draft.time = action.finishedTime;
      });
    case 'CHRONOMETER_START':
      return produce(state, (draft) => {
        draft.chronometerStart = true;
      });
    case 'CHRONOMETER_STOP':
      return produce(state, (draft) => {
        draft.chronometerStart = false;
      });
    case 'OPEN_MODAL':
      return produce(state, (draft) => {
        draft.finishedGame = !state.finishedGame;
        draft.openModal = !state.openModal;
      });
    case 'RESET_GAME':
      return window.location.reload(false);
    case 'SET_HISTORY':
      return produce(state, (draft) => {
        draft.cardsSelected.map((f) => {
          if (draft.cardHistory.includes(f.id)) return;
          draft.cardHistory.push(f.id);
        });
      });
    default:
      return state;
  }
}
