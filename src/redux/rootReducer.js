import { combineReducers } from 'redux';
import booksReducer from './reducers/books';
import addFormInputsReducer from './reducers/addFormInputs';

export default combineReducers({
  books: booksReducer,
  addFormInputs: addFormInputsReducer
});
