import {
  ADD_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  RECEIVE_BOOKS
} from 'redux/actions/actionTypes';

const initialState = { entities: { books: {} }, result: [] };

export default function booksReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case RECEIVE_BOOKS:
      return { ...payload };
    case ADD_BOOK:
      return {
        entities: {
          books: { ...state.entities.books, [payload.id]: payload }
        },
        result: [...state.result, payload.id]
      };
    case DELETE_BOOK:
      const newState = { ...state };
      newState.result = [...newState.result.filter(book => book !== payload)];
      delete state.entities.books[payload];
      return newState;
    case UPDATE_BOOK:
      return state.map(book =>
        book.id === payload.id ? { ...book, ...payload.data } : book
      );
    default:
      return state;
  }
}
