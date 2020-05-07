import { reduceReducers } from 'redux';
import clubReducer from './clubReducer.js';
import {
  ADD_NEW_CLUB,
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  REMOVE_CLUB,
  SET_NEW_CLUB_VALUE } from '../constants/constants';


const initialState = {
  bag: {
    driver: [],
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: []
  },
  bagSize: 0,
  newClub: {
    category: '',
    type: '',
    brand: ''
  }
};

function rootReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    // case `${ADD_NEW_CLUB}`:
    //   const cleanClub = { category: '', type: '', brand: '' };
    //   newState['bag'][newState.newClub.category].push(newState.newClub)
    //   newState.newClub = cleanClub;
    //   return newState;
    case `${DECREMENT_BAG_SIZE}`:
      newState.bagSize -= action.payload;
      return newState;
    case `${INCREMENT_BAG_SIZE}`:
      newState.bagSize += action.payload;
      return newState;
    // case `${REMOVE_CLUB}`:
    //   newState['bag'][action.payload.type] = '';
    //   return newState;
    case `${SET_NEW_CLUB_VALUE}`:
      newState.newClub = action.payload;
      return newState;
    default:
      return state
  }
};

export default rootReducer;