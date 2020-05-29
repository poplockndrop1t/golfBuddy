import { FETCH_BAG } from '../constants/constants';

export function fetchBag(payload) {
 fetch(`/api/bag`, {
      method: 'GET',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      res.json()
        .then(data => console.log('data', data));
  })
};