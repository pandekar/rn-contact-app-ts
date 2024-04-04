import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import contactReducer from '../reducer/contact.reducer';
import watchContacts from '../saga/contact.saga';

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  combineReducers({contactReducer}),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchContacts);

export default reduxStore;
