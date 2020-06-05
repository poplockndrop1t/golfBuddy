import { ADD_NEW_CLUB, REMOVE_CLUB, RESET_CLUB, SET_BAG, SET_NEW_CLUB_VALUE, SET_USERNAME } from '../constants/constants';

const initialState = {
  username: { username: '' },
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
    case `${SET_BAG}`:
      newState.bag = action.payload;
      return newState;
    case `${REMOVE_CLUB}`:
      newState['bag'][action.payload.clubType].splice(action.payload.i, 1);
      return newState;
    case `${RESET_CLUB}`:
      newState.newClub = action.payload;
      return newState;
    case `${SET_NEW_CLUB_VALUE}`:
      newState.newClub = action.payload;
      return newState;
    case `${SET_USERNAME}`:
      newState['username'] = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default clubReducer;