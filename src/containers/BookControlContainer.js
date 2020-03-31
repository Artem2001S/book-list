import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import {
  changeBookControlFormValue,
  updateBookRequest,
  changeBookControlFormEditMode,
  validateBookControlForm
} from 'redux/actions/actions';
import { createInputChangeHandlers } from 'utils/createInputChangeHandlers';
import { validateInputs } from 'utils/validateInputs';
import { getBookByIndex } from 'redux/selectors';

const mapStateToProps = (state, props) => {
  const book = getBookByIndex(state, { index: props.index - 1 });

  return {
    bookData: book,
    isEditMode: state.bookControlForm.isEditMode,
    validationStatus: state.bookControlForm.validationMessage,
    inputs: state.bookControlForm.inputs,
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
  validateInputs: message => dispatch(validateBookControlForm(message)),
  handleFormSubmit
});

const mergeProps = (stateProps, dispatchProps) => {
  const inputChangeHandlers = createInputChangeHandlers(
    stateProps.inputs,
    dispatchProps.handleInputChange
  );

  let needToUpdate = false;
  stateProps.inputs.forEach(input => {
    if (input.value === '') {
      needToUpdate = true;
    }
  });

  return {
    ...stateProps,
    needToUpdate,
    ...dispatchProps,
    inputChangeHandlers,
    onSave: () => {
      if (stateProps.isEditMode) {
        const validationMessage = validateInputs(stateProps.inputs);

        if (validationMessage) {
          dispatchProps.validateInputs(validationMessage);
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
        dispatchProps.validateInputs('');
      }

      dispatchProps.changeEditMode();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BookControl);
