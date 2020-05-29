import { ADD_NEW_CLUB, FETCH_BAG, REMOVE_CLUB, RESET_CLUB, SET_NEW_CLUB_VALUE } from '../constants/constants';

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
    brand: '',
    flex: '',
    clubType: ''
  }
};

function clubReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_NEW_CLUB}`:
      newState['bag'][action.payload.category].push(newState.newClub);
      return newState;
    case `${REMOVE_CLUB}`:
      newState['bag'][action.payload.type].splice(action.payload.i, 1);
      return newState;
    case `${RESET_CLUB}`:
      newState.newClub = action.payload;
      return newState;
    case `${SET_NEW_CLUB_VALUE}`:
      newState.newClub = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default clubReducer;