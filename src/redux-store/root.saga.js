import {all} from 'redux-saga/effects';
import {restaurantListSaga} from './restaurant/index.saga';

export default function* rootSaga() {
  yield all([...restaurantListSaga]);
}
