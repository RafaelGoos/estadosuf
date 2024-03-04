import * as actionTypes from './actionTypes';
import { getCitiesByState } from '../services/api';

export const selectState = (state) => {
  return {
    type: actionTypes.SELECT_STATE,
    payload: state
  };
};

export const fetchCities = (state) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_CITIES_REQUEST });
    try {
      const cities = await getCitiesByState(state);
      dispatch({
        type: actionTypes.FETCH_CITIES_SUCCESS,
        payload: cities
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_CITIES_FAILURE,
        payload: error.message
      });
    }
  };
};
