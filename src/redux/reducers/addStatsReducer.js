import { ADD_STATS } from '../constants/constants';

const initialState = {
  stats: [{
    fir: 0,
    firAttempts: 0,
    gir: 0,
    girAttempts: 0,
    upAndDown30Yard: 0,
    upAndDown30YardAttempts: 0,
    wedgeAppInside100: 0,
    wedgeAppInside100Atempts: 0,
    puttsMadeWithin12Ft: 0,
    puttsMadeWithin12FtAttempts: 0,
    score: 0,
    par: 0
  }]
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