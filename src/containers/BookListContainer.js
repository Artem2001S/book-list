import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { deleteBook } from 'redux/actions/actions';

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  deleteHandler: bookId => dispatch(deleteBook(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
