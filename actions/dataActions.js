import {
  SET_DATA
} from './types';

export const setData = (school, callback) => async dispatch => {
  const data = require('../data');
  dispatch({ type: SET_DATA, payload: data[school] });
  callback();
}