import {takeEvery} from 'redux-saga/effects';
import {GET_RESTAURANT_LIST} from './restaurant.action';
import {getRestaurantListSaga} from './restaurant.saga';

export const restaurantListSaga = [
  takeEvery(GET_RESTAURANT_LIST, getRestaurantListSaga),
];
