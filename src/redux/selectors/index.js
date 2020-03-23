import { createSelector } from 'reselect';
import { searchByBookTitleAndAuthors } from 'utils/search';

const getBooks = state => state.books;
const getSearchValue = state => state.searchForm.value;

export const getVisibleBookList = createSelector(
  [getBooks, getSearchValue],
  (books, searchValue) => searchByBookTitleAndAuthors(books, searchValue)
);
