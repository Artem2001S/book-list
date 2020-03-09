import {
  startApiRequest,
  finishApiRequest,
  addBook as addBookAction,
  updateBook as updateBookAction
} from 'redux/actions/actions';
import booksResource from 'redux/api/booksInstance';

export function fetchBooks() {
  return booksResource.get('/').then(result => result.data);
}

export function deleteBook(id) {
  return booksResource.delete(`/${id}`);
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

export function updateBook(id, data) {
  return dispatch => {
    dispatch(startApiRequest());

    booksResource.put(`/${id}`, data).then(() => {
      dispatch(finishApiRequest());
      dispatch(updateBookAction(id, data));
    });
  };
}
