import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { searchByBookTitleAndAuthors } from 'utils/search';
import { bookListSchema } from 'redux/schemas';

const getBookEntities = state => state.books.entities.books;

const getBooksResult = state => state.books.result;

const getSearchValue = state => state.searchForm.value;

const getIndex = (state, props) => props.index;

const getBooksArray = createSelector(
  [getBookEntities, getBooksResult],
  (books, result) => denormalize(result, bookListSchema, { books })
);

export const getVisibleBookList = createSelector(
  [getBooksArray, getSearchValue],
  (booksArray, searchValue) =>
    searchByBookTitleAndAuthors(booksArray, searchValue)
);

export const getBookByIndex = createSelector(
  [getBooksArray, getIndex],
  (books, index) => books[index]
);
