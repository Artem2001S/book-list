import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { searchByBookTitleAndAuthors } from 'utils/search';
import { deleteBookRequest } from 'redux/actions/actions';

const mapStateToProps = state => ({
  books: searchByBookTitleAndAuthors(state.books, state.searchForm.value),
  isLoading: state.UI.isLoading,
  haveErrors: state.UI.haveErrors
});

const mapDispatchToProps = dispatch => ({
  onDelete: bookId => dispatch(deleteBookRequest(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
