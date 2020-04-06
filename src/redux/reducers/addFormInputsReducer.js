import { bookInputs } from 'constants.js';
import {
  CHANGE_ADD_FORM_VALUE,
  RESET_ADD_FORM,
  VALIDATE_ADD_FORM
} from 'redux/actions/actionTypes';
import { updateInputsArray } from 'utils/changeInputsArray';

const initialState = { inputs: [...bookInputs], validationMessage: '' };

export default function addFormInputsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ADD_FORM_VALUE:
      return {
        ...state,
        inputs: updateInputsArray(
          state.inputs,
          payload.inputName,
          payload.newValue
        )
      };
    case RESET_ADD_FORM:
      return { ...state, inputs: [...bookInputs] };
    case VALIDATE_ADD_FORM:
      return { ...state, validationMessage: payload };
    default:
      return state;
  }
}
