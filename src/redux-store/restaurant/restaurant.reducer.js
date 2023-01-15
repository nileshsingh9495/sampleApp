import {SET_RESTAURANT_LIST, SET_LOADING} from './restaurant.action';

const initialState = {
  restaurantList: [],
  loading: false,
};

const restaurantReducer = (state = initialState, {type, data}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: data,
      };
    case SET_RESTAURANT_LIST:
      return {
        ...state,
        restaurantList: data,
        loading: false,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
