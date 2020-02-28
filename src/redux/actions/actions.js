import { ADD_BOOK, DELETE_BOOK, CHANGE_ADD_FORM_VALUE } from './actionTypes';

export function addBook(id, bookTitle, author, pagesCount, category) {
  return {
    type: ADD_BOOK,
    payload: {
      id,
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

export function changeAddFormInputValue(newValue, inputName) {
  return {
    type: CHANGE_ADD_FORM_VALUE,
    payload: { inputName, newValue }
  };
}
