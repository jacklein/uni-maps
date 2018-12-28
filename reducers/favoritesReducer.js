import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';
import update from 'immutability-helper';

export default function(state = new Map(), action) {
  switch(action.type) {
    case ADD_FAVORITE:
      return update(state, {$add: [[action.payload.id, action.payload]]});
    case REMOVE_FAVORITE:
      return update(state, {$remove: [action.payload.id]});
    default:
      return state;
  }
}