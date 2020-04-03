import { combineReducers } from 'redux';
import booksReducer from './reducers/booksReducer';
import addFormInputsReducer from './reducers/addFormInputsReducer';
import searchFormReducer from './reducers/searchFormReducer';
import bookControlFormReducer from './reducers/bookControlFormReducer';
import UIReducer from './reducers/UIDataReducer';

export default combineReducers({
  books: booksReducer,
  addFormInputs: addFormInputsReducer,
  searchForm: searchFormReducer,
  bookControlForm: bookControlFormReducer,
  UI: UIReducer
});
