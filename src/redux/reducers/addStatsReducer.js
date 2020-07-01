import { ADD_STATS } from '../constants/constants';

const initialState = {
  stats: {
    driver: [],
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: []
  }
};

function addStatsReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_STATS}`:
      return newState
    default:
      return newState;
  }
};

export default addStatsReducer;