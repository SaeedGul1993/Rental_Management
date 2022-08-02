import {createStore, applyMiddleware} from 'redux';
import RootReducr from './reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(RootReducr, {}, applyMiddleware(thunk));
