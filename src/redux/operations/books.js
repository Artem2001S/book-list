import {
  startApiRequest,
  receiveBooks,
  finishApiRequest
} from 'redux/actions/actions';
import booksResource from 'redux/api/booksInstance';

export function fetchBooks() {
  return dispatch => {
    dispatch(startApiRequest());

    return booksResource.get('/books').then(result => {
      dispatch(receiveBooks(result.data));
      dispatch(finishApiRequest());
    });
  };
}
