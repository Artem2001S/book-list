import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import { changeBookControlFormValue, updateBook } from 'redux/actions/actions';

const mapStateToProps = (state, props) => {
  const book = state.books[props.index - 1];

  return {
    bookData: book,
    defaultValues: book,
    inputs: state.bookControlForm
  };
};

const mapDispatchToProps = dispatch => ({
  onInputChange: (value, inputName) =>
    dispatch(changeBookControlFormValue(value, inputName)),
  saveHandler: (id, data) => dispatch(updateBook(id, data)),
  handleFormSubmit
});

export default connect(mapStateToProps, mapDispatchToProps)(BookControl);
