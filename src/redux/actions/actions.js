import { ADD_CLUB } from '../constants/constants';

export function incrementBagSize(payload) {
  return { type: ADD_CLUB, payload }
};