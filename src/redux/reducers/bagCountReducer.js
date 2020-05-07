import {
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE
} from '../constants/constants';

function bagCountReducer(state = [], action) {
  const newState = {...state};

  switch(action.type) {
    case `${DECREMENT_BAG_SIZE}`:
      newState.bagSize -= action.payload;
      return newState;
    case `${INCREMENT_BAG_SIZE}`:
      newState.bagSize += action.payload;
      return newState;
    default
      return state;
  }
}

export default bagCountReducer;