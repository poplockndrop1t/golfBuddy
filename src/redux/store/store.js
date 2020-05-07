import { createStore } from 'redux';
// import rootReducer from '../reducers/rootReducer';
import reducer from '../reducers/rootReducer';

const store = createStore(reducer);

console.log('state', store.getState())

export default store;