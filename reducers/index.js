import { combineReducers } from 'redux';
import data from './dataReducer';
import favorites from './favoritesReducer';

export default combineReducers({
  data,
  favorites
});