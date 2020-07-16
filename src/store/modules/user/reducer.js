import produce from 'immer';

const INITIAL_STATE = {
  userSigned: true,
  userInfo: [],
};
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER_SIGNED':
      return produce(state, (draft) => {
        draft.userSigned = true;
        draft.userInfo.push(...action.payload);
      });
    case 'USER_SIGNOUT':
      return produce(state, (draft) => {
        draft.userSigned = false;
        draft.userEmail = '';
      });
    default:
      return state;
  }
}
