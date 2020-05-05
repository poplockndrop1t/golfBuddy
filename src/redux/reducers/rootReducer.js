import { INCREMENT_BAG_SIZE, ADD_CLUB } from '../constants/constants';

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
    let newBagSize = state.bagSize += action.payload;
    state.bagSize = newBagSize
  }
  return state;
};

export default rootReducer;