import { bookInputs } from 'constants.js';
import {
  CHANGE_BOOK_CONTROL_FORM_VALUE,
  CHANGE_BOOK_CONTROL_FORM_EDIT_MODE,
  VALIDATE_BOOK_CONTROL_FORM,
  RECEIVE_BOOK_CONTROL_FORM_INPUTS
} from 'redux/actions/actionTypes';
import { updateInputsArray } from 'utils/changeInputsArray';

export default function bookControlFormReducer(
  state = { inputs: [...bookInputs], isEditMode: false, validationMessage: '' },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_BOOK_CONTROL_FORM_INPUTS:
      return { ...state, inputs: payload };
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
      return { ...state, validationMessage: payload };
    default:
      return state;
  }
}
