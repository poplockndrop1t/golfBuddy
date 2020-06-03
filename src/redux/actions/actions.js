import {
  ADD_NEW_CLUB,
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  REMOVE_CLUB,
  RESET_CLUB,
  SET_BAG,
  SET_NEW_CLUB_VALUE,
  SET_USERNAME } from '../constants/constants';

export function addNewClub(payload) {
  return { type: ADD_NEW_CLUB, payload };
}

export function decrementBagSize(payload) {
  return { type: DECREMENT_BAG_SIZE, payload };
};

export function incrementBagSize(payload) {
  return { type: INCREMENT_BAG_SIZE, payload };
};

export function removeClub(payload) {
  return { type: REMOVE_CLUB, payload };
};

export function resetClub(payload) {
  return { type: RESET_CLUB, payload };
};

export function setBag(payload) {
  return { type: SET_BAG, payload };
};

export function setNewClubValue(payload) {
  return { type: SET_NEW_CLUB_VALUE, payload };
};

export function setUsername(payload) {
  return { type: SET_USERNAME, payload };
};