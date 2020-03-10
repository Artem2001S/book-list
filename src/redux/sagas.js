import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  LOAD_BOOKS,
  REQUEST_DELETE_BOOK,
  REQUEST_ADD_BOOK,
  REQUEST_UPDATE_BOOK
} from './actions/actionTypes';
import {
  fetchBooks,
  deleteBook as deleteBookRequest,
  addBook as addBookRequest,
  updateBook as updateBookRequest
} from './operations/books';
import {
  receiveBooks,
  startApiRequest,
  finishApiRequest,
  deleteBook,
  addBook,
  updateBook
} from './actions/actions';

export function* rootSaga() {
  yield all([watchBooks()]);
}

function* watchBooks() {
  yield takeEvery(LOAD_BOOKS, workerLoadBooks);
  yield takeEvery(REQUEST_DELETE_BOOK, workerDeleteBooks);
  yield takeEvery(REQUEST_ADD_BOOK, workerAddBook);
  yield takeEvery(REQUEST_UPDATE_BOOK, workerUpdateBook);
}

function* workerLoadBooks() {
  yield put(startApiRequest());

  const data = yield call(fetchBooks);
  yield put(receiveBooks(data));

  yield put(finishApiRequest());
}

function* workerDeleteBooks({ payload }) {
  yield put(startApiRequest());

  yield call(deleteBookRequest, payload);

  yield put(deleteBook(payload));
  yield put(finishApiRequest());
}

function* workerAddBook({ payload }) {
  yield put(startApiRequest());

  yield call(addBookRequest, payload);

  yield put(addBook(payload));
  yield put(finishApiRequest());
}

function* workerUpdateBook({ payload }) {
  yield put(startApiRequest());

  yield call(updateBookRequest, payload.id, payload.data);

  yield put(updateBook(payload.id, payload.data));
  yield put(finishApiRequest());
}
