import { combineReducers } from 'redux';
import { RESET_SELECT_OPTIONS } from '../constants/constants';
import clubReducer from './clubReducer.js';
import bagCountReducer from './bagCountReducer';

const initialState = {
  brands: ["", "Callaway", "Cobra", "Mizuno", "TaylorMade", "Titleist", "Ping"],
  clubTypeNumbers: {
    driver: ["", "8.5", "9.5", "10.0", "10.5"],
    hybrids: ["", "2", "3", "4", "5", "6"],
    irons: ["", "3p", "4a", "4p", "5a", "5p"],
    putter: ["", "33", "34", "35", "36", "37", "38"],
    wedges: ["", "46", "48", "50", "52", "54", "56", "58", "60"],
    woods: ["", "13.5", "15", "16.5", "19", "21"]
  },
  flexOptions: ["", "Regular", "Stiff", "Stiff+", "X", "Ladies", "Senior"]
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case `${RESET_SELECT_OPTIONS}`:
      const newState = {...state};
      console.log(newState);
  //     newState.brands.concat('1');
  // //     // newState.brands.pop();
  // //     // newState.flexOptions.push('')
  // //     // .pop();
  // //     // console.log(newState);
  // //     newState.newClub = action.payload;
      return newState;
    default:
      return state
  }
};

export default combineReducers({
  bagCountReducer,
  clubReducer,
  rootReducer
});