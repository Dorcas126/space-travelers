import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducerRockets from './rockets/rocketsReducer';
import missionsReducer from './mission/fetchMissions';

const rootReducer = combineReducers({
  Rockets: reducerRockets,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
