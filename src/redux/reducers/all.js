import { combineReducers } from 'redux';
import core from './core';
import question from './question';
import error from './error';
import navigation from './navigation';

export default combineReducers({
  core,
  error,
  question,
  navigation
});