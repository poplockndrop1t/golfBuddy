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
  },
  brands: ["", "TaylorMade", "Titleist", "Callaway", "Ping"],
  clubTypeNumbers: {
    driver: ["", "8.5", "9.5", "10.0", "10.5"],
    hybrids: ["", "2", "3", "4", "5", "6"],
    irons: ["", "3p", "4a", "4p", "5a", "5p"],
    putter: ["", "33", "34", "35", "36", "37", "38"],
    wedges: ["", "46", "48", "50", "52", "54", "56", "58", "60"],
    woods: ["", "13.5", "15", "16.5", "19", "21"]
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