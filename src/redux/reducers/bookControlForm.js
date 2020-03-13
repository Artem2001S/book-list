import { bookInputs } from 'CONSTANTS';
import {
  CHANGE_BOOK_CONTROL_FORM_VALUE,
  CHANGE_BOOK_CONTROL_FORM_EDIT_MODE,
  VALIDATE_BOOK_CONTROL_FORM
} from 'redux/actions/actionTypes';
import { updateInputsArray } from 'utils/changeInputsArray';
import { validateInputs } from 'utils/validateInputs';

export default function bookControlFormReducer(
  state = { inputs: [...bookInputs], isEditMode: false, validationMessage: '' },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_BOOK_CONTROL_FORM_VALUE:
      return {
        ...state,
        inputs: updateInputsArray(
          state.inputs,
          payload.inputName,
          payload.newValue
        )
      };
    case CHANGE_BOOK_CONTROL_FORM_EDIT_MODE:
      return { ...state, isEditMode: !state.isEditMode };
    case VALIDATE_BOOK_CONTROL_FORM:
      return { ...state, validationMessage: validateInputs(state.inputs) };
    default:
      return state;
  }
}
