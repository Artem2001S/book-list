import { ADD_BOOK, DELETE_BOOK } from 'redux/actions/actionTypes';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case DELETE_BOOK:
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
}
