import { combineReducers } from 'redux';
import clubReducer from './clubReducer.js';
import bagCountReducer from './bagCountReducer';
import initialState from '../initialState.js';
import {
  ADD_NEW_CLUB,
  REMOVE_CLUB,
  SET_NEW_CLUB_VALUE } from '../constants/constants';

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case `${ADD_NEW_CLUB}`:
      return clubReducer(state, action);
    case `${REMOVE_CLUB}`:
      return clubReducer(state, action);
    case `${SET_NEW_CLUB_VALUE}`:
      return clubReducer(state, action);
    default:
      return state
  }
};

export default combineReducers({
  bagCountReducer,
  clubReducer,
  rootReducer
});