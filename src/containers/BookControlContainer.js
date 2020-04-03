import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import {
  changeBookControlFormValue,
  updateBookRequest,
  changeBookControlFormEditMode,
  validateBookControlForm,
  receiveBookControlFormInputs
} from 'redux/actions/actions';
import { validateInputs } from 'utils/validateInputs';
import { getBookByIndex } from 'redux/selectors';
import { updateInputsArrayCompletely } from 'utils/changeInputsArray';
import { createInputChangeHandlers } from 'utils/createInputChangeHandlers';

const mapStateToProps = (state, props) => {
  const book = getBookByIndex(state, { index: props.index - 1 });

  return {
    bookData: book,
    isEditMode: state.bookControlForm.isEditMode,
    inputs: state.bookControlForm.inputs,
    validationStatus: state.bookControlForm.validationMessage,
    isLoading: state.UI.isLoading,
    haveErrors: state.UI.haveErrors
  };
};

const mapDispatchToProps = dispatch => ({
  handleInputChange: (inputName, e) =>
    dispatch(changeBookControlFormValue(e.target.value, inputName)),
  changeInputValue: (value, inputName) =>
    dispatch(changeBookControlFormValue(value, inputName)),
  onSave: (id, data) => dispatch(updateBookRequest(id, data)),
  changeEditMode: () => dispatch(changeBookControlFormEditMode()),
  changeValidationStatus: message => dispatch(validateBookControlForm(message)),
  changeInputsArray: inputs => dispatch(receiveBookControlFormInputs(inputs)),
  handleFormSubmit
});

const mergeProps = (stateProps, dispatchProps) => {
  const inputChangeHandlers = createInputChangeHandlers(
    stateProps.inputs,
    dispatchProps.handleInputChange
  );

  return {
    ...stateProps,
    ...dispatchProps,
    inputChangeHandlers,
    onSave: () => {
      if (stateProps.isEditMode) {
        const validationResult = validateInputs(stateProps.inputs);
        if (validationResult !== '') {
          dispatchProps.changeValidationStatus(validationResult);
          return;
        }

        // get data from inputs
        const data = stateProps.inputs.reduce((acc, next) => {
          return {
            ...acc,
            [next.name]: next.value
          };
        }, {});

        dispatchProps.onSave(stateProps.bookData.id, data);
        dispatchProps.changeValidationStatus('');
      } else {
        // update input values
        dispatchProps.changeInputsArray(
          updateInputsArrayCompletely(stateProps.inputs, stateProps.bookData)
        );
      }
      dispatchProps.changeEditMode(!stateProps.isEditMode);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BookControl);
