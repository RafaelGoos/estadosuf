import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedState: null,
  cities: [],
  loading: false,
  error: null
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_STATE:
      return {
        ...state,
        selectedState: action.payload
      };
    case actionTypes.FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload
      };
    case actionTypes.FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default stateReducer;
