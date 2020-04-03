import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';
import { handleFormSubmit } from 'utils/handleFormSubmit';
import {
  changeBookControlFormValue,
  updateBookRequest,
  changeBookControlFormEditMode,
  validateBookControlForm
} from 'redux/actions/actions';
import { validateInputs } from 'utils/validateInputs';
import { getBookByIndex } from 'redux/selectors';

const mapStateToProps = (state, props) => {
  const book = getBookByIndex(state, { index: props.index - 1 });

  return {
    bookData: book,
    isEditMode: state.bookControlForm.isEditMode,
    validationStatus: state.bookControlForm.validationMessage,
    isLoading: state.UI.isLoading,
    haveErrors: state.UI.haveErrors
  };
};

const mapDispatchToProps = dispatch => ({
  handleInputChange: (inputName, e) =>
    dispatch(changeBookControlFormValue(e.target.value, inputName)),
  onSave: (id, data) => {
    return dispatch(updateBookRequest(id, data));
  },
  changeEditMode: () => dispatch(changeBookControlFormEditMode()),
  changeValidationStatus: message => dispatch(validateBookControlForm(message)),
  handleFormSubmit
});

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    // onSave: inputss => {
    //   if (stateProps.isEditMode) {
    //     const validationMessage = validateInputs(inputss);
    //     console.log('message: ', validationMessage);

    //     if (validationMessage) {
    //       dispatchProps.changeValidationStatus(validationMessage);
    //       return;
    //     }

    //     // get data from inputs
    //     const data = inputss.reduce((acc, next) => {
    //       return {
    //         ...acc,
    //         [next.name]: next.value
    //       };
    //     }, {});

    //     dispatchProps.changeValidationStatus('');
    //     dispatchProps.onSave(stateProps.bookData.id, data);
    //   }

    //   dispatchProps.changeEditMode();
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BookControl);
