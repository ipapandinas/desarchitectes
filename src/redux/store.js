import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appDefaultState, appReducer } from './app/index';

const initialState = {
  app: appDefaultState,
};

// If many reducers, use combineReducers from 'redux'
const rootReducer = combineReducers({
  app: appReducer,
});

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = reduxCreateStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleWareEnhancer)
);

export { store };
