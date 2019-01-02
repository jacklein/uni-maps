import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './types';

export const addFavorite = item => async dispatch => {
  dispatch({ type: ADD_FAVORITE, payload: item });
};

export const removeFavorite = itemID => async dispatch => {
  dispatch({ type: REMOVE_FAVORITE, payload: itemID });
};