import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

export function addBook(bookTitle, author, category, pagesCount) {
  return {
    type: ADD_BOOK,
    payload: {
      bookTitle,
      author,
      category,
      pagesCount
    }
  };
}

export function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    payload: bookId
  };
}
