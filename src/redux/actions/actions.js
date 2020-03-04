import {
  ADD_BOOK,
  DELETE_BOOK,
  CHANGE_ADD_FORM_VALUE,
  CHANGE_SEARCH_FORM_VALUE,
  CHANGE_BOOK_CONTROL_FORM_VALUE,
  UPDATE_BOOK,
  RESET_ADD_FORM
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

export function updateBook(bookId, newData) {
  return {
    type: UPDATE_BOOK,
    payload: { id: bookId, data: newData }
  };
}

export function changeAddFormInputValue(newValue, inputName) {
  return {
    type: CHANGE_ADD_FORM_VALUE,
    payload: { inputName, newValue }
  };
}

export function resetAddForm() {
  return {
    type: RESET_ADD_FORM
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
