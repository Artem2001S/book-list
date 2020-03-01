import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';

const mapStateToProps = (state, props) => {
  return {
    inputs: state.bookControlForm,
    bookData: state.books[props.index - 1]
  };
};

export default connect(mapStateToProps)(BookControl);
