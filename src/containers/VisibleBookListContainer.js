import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { searchByBookTitleAndAutors } from 'utils/search';
import { deleteBookRequest } from 'redux/actions/actions';

const mapStateToProps = state => ({
  books: searchByBookTitleAndAutors(state.books, state.searchForm.value),
  isLoading: state.UI.isLoading
});

const mapDispatchToProps = dispatch => ({
  onDelete: bookId => dispatch(deleteBookRequest(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
