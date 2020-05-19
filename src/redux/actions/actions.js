import {
  ADD_NEW_CLUB,
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  REMOVE_CLUB,
  RESET_BAG,
  SET_NEW_CLUB_VALUE } from '../constants/constants';

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

export function resetBag(payload) {
  return { type: RESET_BAG, payload };
};

export function setNewClubValue(payload) {
  return { type: SET_NEW_CLUB_VALUE, payload };
};