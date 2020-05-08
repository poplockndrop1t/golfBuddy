import { combineReducers } from 'redux';
import clubReducer from './clubReducer.js';
import bagCountReducer from './bagCountReducer';

const initialState = {
  brands: ["", "TaylorMade", "Titleist", "Callaway", "Ping"],
  clubTypeNumbers: {
    driver: ["", "8.5", "9.5", "10.0", "10.5"],
    hybrids: ["", "2", "3", "4", "5", "6"],
    irons: ["", "3p", "4a", "4p", "5a", "5p"],
    putter: ["", "33", "34", "35", "36", "37", "38"],
    wedges: ["", "46", "48", "50", "52", "54", "56", "58", "60"],
    woods: ["", "13.5", "15", "16.5", "19", "21"]
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
};

export default combineReducers({
  bagCountReducer,
  clubReducer,
  rootReducer
});