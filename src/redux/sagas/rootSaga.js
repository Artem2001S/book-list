import { all } from 'redux-saga/effects';
import { watchBooks } from './booksSaga';

export function* rootSaga() {
  yield all([watchBooks()]);
}
