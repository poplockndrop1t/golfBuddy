import { ADD_STATS } from '../constants/constants';

// const initialState = {
//   username: { username: '' },
//   bag: {
//     driver: [],
//     woods: [],
//     hybrids: [],
//     irons: [],
//     wedges: [],
//     putter: []
//   },
//   newClub: {
//     category: '',
//     brand: '',
//     flex: '',
//     clubType: ''
//   }
// };

function addStatsReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_STATS}`:
      return newState
    default:
      return newState;
  }
};

export default addStatsReducer;