import {
  ADD_NEW_CLUB,
  ADD_STATS,
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  REMOVE_CLUB,
  RESET_CLUB,
  SET_BAG,
  SET_BAG_SIZE,
  SET_LOGO_DISPLAY,
  SET_NEW_CLUB_VALUE,
  SET_USERNAME } from '../constants/constants';

export function addNewClub(payload) {
  return { type: ADD_NEW_CLUB, payload };
};

export function addStats(payload) {
  return { type: ADD_STATS, payload };
};

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

export function setBagSize(payload) {
  return { type: SET_BAG_SIZE, payload };
};

export function setLogoDisplay(payload) {
  return { type: SET_LOGO_DISPLAY, payload };
};

export function setNewClubValue(payload) {
  return { type: SET_NEW_CLUB_VALUE, payload };
};

export function setUsername(payload) {
  return { type: SET_USERNAME, payload };
};