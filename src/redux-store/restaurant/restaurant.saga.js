import {call, put} from 'redux-saga/effects';
import {SET_RESTAURANT_LIST, SET_LOADING} from './restaurant.action';
import {getRestaurantListApi} from './restaurant.api';
import {
  selectRestaurantList,
  createTable,
  addRestaurantToLocalDB,
} from './../../utils/database';

export function* getRestaurantListSaga() {
  try {
    yield put({type: SET_LOADING, data: true});
    yield call(createTable);
    const data = yield call(selectRestaurantList) || [];
    if (data?.length > 0) {
      yield put({type: SET_RESTAURANT_LIST, data});
    } else {
      yield put({type: SET_LOADING, data: true});
      const {data} = yield call(getRestaurantListApi);
      yield addRestaurantToLocalDB(data);
      yield put({type: SET_RESTAURANT_LIST, data});
    }
  } catch (e) {
    console.log('Err@ getRestaurantListSaga: ', e);
    yield put({type: SET_LOADING, data: false});
  }
}
