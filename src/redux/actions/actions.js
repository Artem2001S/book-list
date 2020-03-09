import {
  ADD_BOOK,
  DELETE_BOOK,
  CHANGE_ADD_FORM_VALUE,
  CHANGE_SEARCH_FORM_VALUE,
  CHANGE_BOOK_CONTROL_FORM_VALUE,
  UPDATE_BOOK,
  RESET_ADD_FORM,
  START_API_REQUEST,
  FINISH_API_REQUEST,
  RECEIVE_BOOKS,
  LOAD_BOOKS,
  REQUEST_DELETE_BOOK,
  REQUEST_ADD_BOOK
} from './actionTypes';

export function startApiRequest() {
  return {
    type: START_API_REQUEST
  };
}

export function finishApiRequest() {
  return {
    type: FINISH_API_REQUEST
  };
}

export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    payload: books
  };
}

export function loadBooks() {
  return {
    type: LOAD_BOOKS
  };
}

export function addBookRequest(id, bookTitle, authors, pagesCount, category) {
  return {
    type: REQUEST_ADD_BOOK,
    payload: { id, bookTitle, authors, pagesCount, category }
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  };
}

export function deleteBookRequest(bookId) {
  return {
    type: REQUEST_DELETE_BOOK,
    payload: bookId
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
