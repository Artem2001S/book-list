import { connect } from 'react-redux';
import { v4 as uuidv1 } from 'uuid';
import AddForm from 'components/AddForm/AddForm';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import { validateInputs } from 'utils/validateInputs';
import {
  changeAddFormInputValue,
  resetAddForm,
  addBookRequest
} from 'redux/actions/actions';
import { createInputChangeHandlers } from 'utils/createInputChangeHandlers';

const mapStateToProps = state => ({
  inputs: state.addFormInputs
});

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (inputName, e) =>
      dispatch(changeAddFormInputValue(e.target.value, inputName)),
    onAdd: (id, bookTitle, authors, pagesCount, category) => {
      dispatch(addBookRequest(id, bookTitle, authors, pagesCount, category));
      dispatch(resetAddForm());
    },
    handleFormSubmit
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const validationErrors = validateInputs(stateProps.inputs);
  const inputChangeHandlers = createInputChangeHandlers(
    stateProps.inputs,
    dispatchProps.onInputChange
  );

  return {
    ...stateProps,
    ...dispatchProps,
    inputChangeHandlers,
    validationErrors,
    onAdd: () => {
      // if don't have validation errors - add book
      if (typeof validationErrors !== 'string') {
        const id = uuidv1();
        dispatchProps.onAdd(id, ...stateProps.inputs.map(input => input.value));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddForm);
