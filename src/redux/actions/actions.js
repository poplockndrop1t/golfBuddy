import { INCREMENT_BAG_SIZE, ADD_CLUB } from '../constants/constants';

export function addClub(payload) {
  return { type: ADD_CLUB, payload };
};

export function incrementBagSize(payload) {
  return { type: INCREMENT_BAG_SIZE, payload };
};
