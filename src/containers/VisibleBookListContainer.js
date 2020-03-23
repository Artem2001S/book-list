import { connect } from 'react-redux';
import BookList from 'components/BookList/BookList';
import { deleteBookRequest } from 'redux/actions/actions';
import { getVisibleBookList } from 'redux/selectors';

const mapStateToProps = state => ({
  books: getVisibleBookList(state),
  isLoading: state.UI.isLoading,
  haveErrors: state.UI.haveErrors
});

const mapDispatchToProps = dispatch => ({
  onDelete: bookId => dispatch(deleteBookRequest(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
