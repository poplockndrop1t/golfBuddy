import {
  ADD_NEW_CLUB,
  REMOVE_CLUB,
  SET_NEW_CLUB_VALUE
} from '../constants/constants';

const initialState = {
  bag: {
    driver: [],
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: []
  },
  newClub: {
    category: '',
    type: '',
    brand: ''
  }
};

function clubReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_NEW_CLUB}`:
      newState['bag'][newState.newClub.category].push(newState.newClub);
      newState.newClub = { category: '', type: '', brand: '' };
      return newState;
    case `${REMOVE_CLUB}`:
      newState['bag'][action.payload.type].splice(action.payload.i, 1);
      return newState;
    case `${SET_NEW_CLUB_VALUE}`:
      newState.newClub = action.payload;
      return newState;
    default:
      return state;
  }
};

export default clubReducer;