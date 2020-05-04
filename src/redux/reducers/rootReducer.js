import { ADD_CLUB } from '../constants/constants';

const initialState = {
  bagSize: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CLUB) {
    let newBagSize = state.bagSize += 1;
    state.bagSize = newBagSize
  }
  return state;
};

export default rootReducer;