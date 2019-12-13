import { combineReducers } from 'redux';
import profile from './profile';
import home from './home';

export default combineReducers({
  profile,
  home
});