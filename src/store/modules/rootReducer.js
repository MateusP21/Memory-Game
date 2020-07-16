import { combineReducers } from 'redux';

import memoryGame from './memoryGame/reducer';
import user from './user/reducer';

export default combineReducers({
  memoryGame, user,
});
