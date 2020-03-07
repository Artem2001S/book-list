import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { searchByBookTitleAndAutors } from 'utils/search';
import { deleteBook } from 'redux/operations/books';

const mapStateToProps = state => ({
  books: searchByBookTitleAndAutors(state.books, state.searchForm.value)
});

const mapDispatchToProps = dispatch => ({
  onDelete: bookId => dispatch(deleteBook(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
