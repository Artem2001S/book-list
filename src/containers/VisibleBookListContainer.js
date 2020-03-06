import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { deleteBook } from 'redux/actions/actions';
import { searchByBookTitleAndAutors } from 'utils/search';
import { fetchBooks } from 'redux/operations/books';

const mapStateToProps = state => ({
  books: searchByBookTitleAndAutors(state.books, state.searchForm.value)
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(fetchBooks()),
  onDelete: bookId => dispatch(deleteBook(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
