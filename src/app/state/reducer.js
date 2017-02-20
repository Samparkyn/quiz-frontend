'use strict';

import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import QuizReducer from '../components/Quiz/state/reducer';

export default combineReducers({
  routing: routerReducer,
  quiz: QuizReducer
});
