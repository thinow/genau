import { combineReducers } from 'redux';
import core from './core';
import error from './error';

export default combineReducers({
  core,
  error
});