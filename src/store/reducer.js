import { combineReducers } from 'redux-immutable';

import { reducer as HomeReducer } from '@/pages/home/store';
import {reducer as WorksRecorder } from '@/pages/works/store';


const cReducer = combineReducers({
  home: HomeReducer,
  works: WorksRecorder,
});

export default cReducer;