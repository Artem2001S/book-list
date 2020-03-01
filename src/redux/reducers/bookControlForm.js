import { bookInputs } from 'CONSTANTS';
import { CHANGE_BOOK_CONTROL_FORM_VALUE } from 'redux/actions/actionTypes';

export default function bookControlFormReducer(
  state = [...bookInputs],
  action
) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_BOOK_CONTROL_FORM_VALUE:
      return [
        ...state.map(inputData =>
          inputData.name === payload.inputName
            ? { ...inputData, value: payload.newValue }
            : { ...inputData }
        )
      ];
    default:
      return state;
  }
}
