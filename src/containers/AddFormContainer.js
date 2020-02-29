import { connect } from 'react-redux';
import { v4 as uuidv1 } from 'uuid';
import AddForm from 'components/AddForm/AddForm';
import { changeAddFormInputValue, addBook } from 'redux/actions/actions';

const mapStateToProps = state => ({
  inputs: state.addFormInputs
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (value, inputName) =>
    dispatch(changeAddFormInputValue(value, inputName)),
  onSubmit: (bookTitle, author, category, pagesCount) => {
    const id = uuidv1();
    dispatch(addBook(id, bookTitle, author, category, pagesCount));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
