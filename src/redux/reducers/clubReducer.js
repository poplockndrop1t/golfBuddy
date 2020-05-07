import {
  ADD_NEW_CLUB,
  REMOVE_CLUB,
  SET_NEW_CLUB_VALUE
} from '../constants/constants';

function clubReducer(state = [], action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_NEW_CLUB}`:
      const cleanClub = { category: '', type: '', brand: '' };
      newState['bag'][newState.newClub.category].push(newState.newClub)
      newState.newClub = cleanClub;
      return newState;
    case `${REMOVE_CLUB}`:
      newState['bag'][action.payload.type].splice(action.payload.i, 1);
      // console.log('newState', action.payload);
      return newState;
    case `${SET_NEW_CLUB_VALUE}`:
      newState.newClub = action.payload;
      return newState;
    default:
      return state;
  }
};

export default clubReducer;