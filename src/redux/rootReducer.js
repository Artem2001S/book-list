import { combineReducers } from 'redux';
import booksReducer from './reducers/books';
import addFormInputsReducer from './reducers/addFormInputs';
import searchFormReducer from './reducers/searchForm';
import bookControlFormReducer from './reducers/bookControlForm';
import UIReducer from './reducers/UI';

export default combineReducers({
  books: booksReducer,
  addFormInputs: addFormInputsReducer,
  searchForm: searchFormReducer,
  bookControlForm: bookControlFormReducer,
  UI: UIReducer
});
