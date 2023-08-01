import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './mission/missionsReducer';
import reducerRockets from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  Rockets: reducerRockets,
  missions: missionsReducer,
});

const middleware = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
