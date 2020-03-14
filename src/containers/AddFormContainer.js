import { connect } from 'react-redux';
import { v4 as uuidv1 } from 'uuid';
import AddForm from 'components/AddForm/AddForm';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import { validateInputs } from 'utils/validateInputs';
import {
  changeAddFormInputValue,
  resetAddForm,
  addBookRequest,
  validateAddForm
} from 'redux/actions/actions';
import { createInputChangeHandlers } from 'utils/createInputChangeHandlers';

const mapStateToProps = state => ({
  inputs: state.addFormInputs.inputs,
  validationErrors: state.addFormInputs.validationMessage
});

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (inputName, e) =>
      dispatch(changeAddFormInputValue(e.target.value, inputName)),
    onAdd: (id, bookTitle, authors, pagesCount, category) => {
      dispatch(addBookRequest(id, bookTitle, authors, pagesCount, category));
      dispatch(resetAddForm());
    },
    validateForm: message => dispatch(validateAddForm(message)),
    handleFormSubmit
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const inputChangeHandlers = createInputChangeHandlers(
    stateProps.inputs,
    dispatchProps.onInputChange
  );

  return {
    ...stateProps,
    ...dispatchProps,
    inputChangeHandlers,
    onAdd: () => {
      const validationErrors = validateInputs(stateProps.inputs);

      // if don't have validation errors - add book
      if (!validationErrors) {
        const id = uuidv1();
        dispatchProps.validateForm('');
        dispatchProps.onAdd(id, ...stateProps.inputs.map(input => input.value));
      } else {
        dispatchProps.validateForm(validationErrors);
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddForm);
