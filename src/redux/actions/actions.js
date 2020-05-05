import {
  ADD_CLUB,
  ADD_NEW_CLUB,
  INCREMENT_BAG_SIZE,
  SET_NEW_CLUB_VALUE } from '../constants/constants';

export function addClub(payload) {
  return { type: ADD_CLUB, payload };
};

export function addNewClub(payload) {
  return { type: ADD_NEW_CLUB, payload };
}

export function incrementBagSize(payload) {
  return { type: INCREMENT_BAG_SIZE, payload };
};

export function setNewClubValue(payload) {
  return { type: SET_NEW_CLUB_VALUE, payload };
}