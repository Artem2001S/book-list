import { takeEvery, call, put, all, take } from 'redux-saga/effects';
import { LOAD_BOOKS } from './actions/actionTypes';
import { fetchBooks } from './operations/books';
import {
  receiveBooks,
  startApiRequest,
  finishApiRequest
} from './actions/actions';

export function* rootSaga() {
  yield all([watchBooks()]);
}

function* watchBooks() {
  yield takeEvery(LOAD_BOOKS, workerLoadBooks);
}

function* workerLoadBooks() {
  yield put(startApiRequest());

  const data = yield call(fetchBooks);
  yield put(receiveBooks(data));

  yield put(finishApiRequest());
}
