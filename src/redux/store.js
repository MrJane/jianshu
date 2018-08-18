import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import * as actioTypes from './actionTypes';
import * as actionCreators from './actionCreators'
import reducer from './reducers'
const store = createStore(reducer,applyMiddleware(thunk));
export {store,actionCreators,actioTypes}