import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/activeUserReducer';

const middleware = [thunk];
const store = createStore(reducer,applyMiddleware(...middleware));

export default store;