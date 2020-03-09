import { takeEvery, call, put, all } from 'redux-saga/effects';
import { LOAD_BOOKS, REQUEST_DELETE_BOOK } from './actions/actionTypes';
import {
  fetchBooks,
  deleteBook as deleteBookRequest
} from './operations/books';
import {
  receiveBooks,
  startApiRequest,
  finishApiRequest,
  deleteBook
} from './actions/actions';

export function* rootSaga() {
  yield all([watchBooks()]);
}

function* watchBooks() {
  yield takeEvery(LOAD_BOOKS, workerLoadBooks);
  yield takeEvery(REQUEST_DELETE_BOOK, workerDeleteBooks);
}

function* workerLoadBooks() {
  yield put(startApiRequest());

  const data = yield call(fetchBooks);
  yield put(receiveBooks(data));

  yield put(finishApiRequest());
}

function* workerDeleteBooks({ payload }) {
  yield call(deleteBookRequest, payload);

  yield put(deleteBook(payload));
}
