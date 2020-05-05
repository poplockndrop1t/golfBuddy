import { INCREMENT_BAG_SIZE } from '../constants/constants';

export function incrementBagSize(payload) {
  return { type: INCREMENT_BAG_SIZE, payload }
};