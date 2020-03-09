import { connect } from 'react-redux';
import { v4 as uuidv1 } from 'uuid';
import AddForm from 'components/AddForm/AddForm';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import {
  changeAddFormInputValue,
  resetAddForm,
  addBookRequest
} from 'redux/actions/actions';

const mapStateToProps = state => ({
  inputs: state.addFormInputs
});

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (value, inputName) =>
      dispatch(changeAddFormInputValue(value, inputName)),
    onAdd: (id, bookTitle, authors, pagesCount, category) => {
      dispatch(addBookRequest(id, bookTitle, authors, pagesCount, category));
      dispatch(resetAddForm());
    },
    handleFormSubmit
  };
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onAdd: () => {
    const id = uuidv1();
    dispatchProps.onAdd(id, ...stateProps.inputs.map(input => input.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddForm);
