import { combineReducers } from 'redux';
import booksReducer from './reducers/books';
import addFormInputsReducer from './reducers/addFormInputs';
import searchFormReducer from './reducers/searchForm';
import bookControlFormReducer from './reducers/bookControlForm';

export default combineReducers({
  books: booksReducer,
  addFormInputs: addFormInputsReducer,
  searchForm: searchFormReducer,
  bookControlForm: bookControlFormReducer
});
