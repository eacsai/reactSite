import { combineReducers } from 'redux-immutable';

import { reducer as HomeReducer } from '../pages/home/store';


const cReducer = combineReducers({
  home: HomeReducer,
});

export default cReducer;