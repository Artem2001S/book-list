import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  LOAD_BOOKS,
  REQUEST_DELETE_BOOK,
  REQUEST_ADD_BOOK
} from './actions/actionTypes';
import {
  fetchBooks,
  deleteBook as deleteBookRequest,
  addBook as addBookRequest
} from './operations/books';
import {
  receiveBooks,
  startApiRequest,
  finishApiRequest,
  deleteBook,
  addBook
} from './actions/actions';

export function* rootSaga() {
  yield all([watchBooks()]);
}

function* watchBooks() {
  yield takeEvery(LOAD_BOOKS, workerLoadBooks);
  yield takeEvery(REQUEST_DELETE_BOOK, workerDeleteBooks);
  yield takeEvery(REQUEST_ADD_BOOK, workerAddBook);
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

function* workerAddBook({ payload }) {
  yield call(addBookRequest, payload);

  yield put(addBook(payload));
}
