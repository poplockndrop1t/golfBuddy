import { INCREMENT_BAG_SIZE, ADD_CLUB, ADD_NEW_CLUB } from '../constants/constants';

const initialState = {
  bag: {
    driver: '',
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: ''
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
    console.log('here', newState, action.payload);
  }
  return state;
};

export default rootReducer;