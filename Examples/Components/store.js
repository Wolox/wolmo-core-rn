import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { WMOToastReducer as toast } from 'wolmo-core-rn';

import { reducer as withRequestExample } from './reducers/withRequestExample';

const reducers = combineReducers({
  toast,
  withRequestExample
});

export default createStore(reducers, applyMiddleware(thunk, logger));
