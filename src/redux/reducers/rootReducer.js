import { INCREMENT_BAG_SIZE, ADD_CLUB, ADD_NEW_CLUB, SET_NEW_CLUB_VALUE } from '../constants/constants';

const initialState = {
  bag: {
    driver: '',
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: ''
  },
  newClub: {
    category: '',
    type: '',
    brand: ''
  },
  bagSize: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_BAG_SIZE) {
    const newState = {...state};
    newState.bagSize += action.payload;
    return newState;
  } else if (action.type === ADD_CLUB) {
    const newState = {...state};
    newState['bag'][action.payload.type] = action.payload.brand;
    return newState;
  } else if (action.type === ADD_NEW_CLUB) {
    const newState = {...state};
    const cleanClub = { category: '', type: '', brand: '' };
    newState['bag'][newState.newClub.category].push(newState.newClub)
    newState.newClub = cleanClub;
    return newState;
  } else if (action.type === SET_NEW_CLUB_VALUE) {
    const newState = {...state};
    newState.newClub = action.payload;
    return newState;
  }
  return state;
};

export default rootReducer;