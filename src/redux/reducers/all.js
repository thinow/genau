import { combineReducers } from 'redux';
import core from './core';
import question from './question';
import error from './error';

export default combineReducers({
  core,
  question,
  error
});