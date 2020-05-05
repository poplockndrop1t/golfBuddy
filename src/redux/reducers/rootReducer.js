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
    // return ne
  } else if (action.type === ADD_CLUB) {
    // let newBag = {...state};
    // let clubType = action.payload.type;
    // newBag['bag'][clubType] = action.payload.brand;
    // return newBag
    // const newBag = Object.assign({}, state);
    // newBag['bag'][action.payload.type] = action.payload.brand;
    // state['bag'][action.payload.type] = newBag['bag'][action.payload.type];
    // return newBag;
    const type = action.payload.type;
    const brand = action.payload.brand;

    const newState = Object.assign({}, state);
    newState['bag'][type] = brand;
    // state = newState
    console.log(newState);
    return newState;
  }
  return state;
};

export default rootReducer;