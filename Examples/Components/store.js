import { createStore, combineReducers } from 'redux';
import { WMOToastReducer as toast } from 'wolmo-core-rn';

const reducers = combineReducers({
  toast
});

export default createStore(reducers);
