import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { searchByBookTitleAndAuthors } from 'utils/search';
import { bookListSchema } from 'redux/schemas';

const getBooks = state => {
  const booksArray = denormalize(state.books.result, bookListSchema, {
    books: state.books.entities.books
  });

  return booksArray;
};
const getSearchValue = state => state.searchForm.value;

export const getVisibleBookList = createSelector(
  [getBooks, getSearchValue],
  (books, searchValue) => searchByBookTitleAndAuthors(books, searchValue)
);
