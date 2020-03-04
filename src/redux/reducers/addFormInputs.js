import { bookInputs } from 'CONSTANTS';
import {
  CHANGE_ADD_FORM_VALUE,
  RESET_ADD_FORM
} from 'redux/actions/actionTypes';
import { updateInputsArray } from 'utils/changeInputsArray';

const initialState = [...bookInputs];

export default function addFormInputsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ADD_FORM_VALUE:
      return updateInputsArray(state, payload.inputName, payload.newValue);
    case RESET_ADD_FORM:
      return [...bookInputs];
    default:
      return state;
  }
}
