import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';
import mapKeys from 'lodash/mapKeys'
import update from 'immutability-helper';

export default function(state = {}, action) {
  switch(action.type) {
    case ADD_FAVORITE:
      return { ...mapKeys([action.payload], 'id'), ...state }
    case REMOVE_FAVORITE:
      return update(state, {$unset: [action.payload.id]});
    default:
      return state;
  }
}