import {
  ADD_BOOK,
  DELETE_BOOK,
  CHANGE_ADD_FORM_VALUE,
  CHANGE_SEARCH_FORM_VALUE,
  CHANGE_BOOK_CONTROL_FORM_VALUE
} from './actionTypes';

export function addBook(id, bookTitle, authors, pagesCount, category) {
  return {
    type: ADD_BOOK,
    payload: {
      id,
      bookTitle,
      authors,
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

export function changeSearchFormValue(value) {
  return {
    type: CHANGE_SEARCH_FORM_VALUE,
    payload: value
  };
}

export function changeBookControlFormValue(newValue, inputName) {
  return {
    type: CHANGE_BOOK_CONTROL_FORM_VALUE,
    payload: { inputName, newValue }
  };
}
