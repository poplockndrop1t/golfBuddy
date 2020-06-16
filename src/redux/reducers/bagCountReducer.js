import {
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  SET_BAG_SIZE
} from '../constants/constants';

const initialState = {
  bagSize: 0
};

function bagCountReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${DECREMENT_BAG_SIZE}`:
      newState.bagSize -= action.payload;
      return newState;
    case `${INCREMENT_BAG_SIZE}`:
      newState.bagSize += action.payload;
      return newState;
    case `${SET_BAG_SIZE}`:
      var bagLength = 0;

      for (var key in action.payload) {
        let clubArray = action.payload[key];
        if (Array.isArray(clubArray) && clubArray.length > 0) {
          if (clubArray[0].clubType === '3p') bagLength += 8;
          if (clubArray[0].clubType === '4a') bagLength += 8;
          if (clubArray[0].clubType === '4p') bagLength += 7;
          if (clubArray[0].clubType === '5a') bagLength += 7;
          if (clubArray[0].clubType === '5p') bagLength += 6;
          if (key !== 'irons') bagLength += clubArray.length;
        }
      };
      newState.bagSize += bagLength
      return newState;
    default:
      return state;
  }
};

export default bagCountReducer;