import { combineReducers } from 'redux';

import exerciseReducer from './exerciseReducer';

const reducers = combineReducers({
  exercises: exerciseReducer
})

export default reducers;