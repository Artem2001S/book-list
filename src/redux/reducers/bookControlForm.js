import { bookInputs } from 'CONSTANTS';
import { CHANGE_BOOK_CONTROL_FORM_VALUE } from 'redux/actions/actionTypes';
import { updateInputsArray } from 'utils/changeInputsArray';

export default function bookControlFormReducer(
  state = [...bookInputs],
  action
) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_BOOK_CONTROL_FORM_VALUE:
      return updateInputsArray(state, payload.inputName, payload.newValue);
    default:
      return state;
  }
}
