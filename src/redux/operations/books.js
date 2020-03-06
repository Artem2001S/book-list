import {
  startApiRequest,
  receiveBooks,
  finishApiRequest,
  addBook as addBookAction,
  deleteBook as deleteBookAction
} from 'redux/actions/actions';
import booksResource from 'redux/api/booksInstance';

export function fetchBooks() {
  return dispatch => {
    dispatch(startApiRequest());

    return booksResource.get('/').then(result => {
      dispatch(receiveBooks(result.data));
      dispatch(finishApiRequest());
    });
  };
}

export function deleteBook(id) {
  return dispatch => {
    dispatch(startApiRequest());

    return booksResource.delete(`/${id}`).then(() => {
      dispatch(deleteBookAction(id));
      dispatch(finishApiRequest());
    });
  };
}

export function addBook(id, bookTitle, authors, pagesCount, category) {
  return dispatch => {
    dispatch(startApiRequest());
    const book = { id, bookTitle, authors, pagesCount, category };

    return booksResource.post('/', book).then(() => {
      dispatch(addBookAction(id, bookTitle, authors, pagesCount, category));
      dispatch(finishApiRequest());
    });
  };
}
