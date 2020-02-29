import { CHANGE_ADD_FORM_VALUE } from 'redux/actions/actionTypes';

const initialState = [
  {
    name: 'bookTitle',
    label: 'Book Title',
    value: ''
  },
  {
    name: 'authors',
    label: 'Authors',
    value: ''
  },
  {
    name: 'pagesCount',
    label: 'Pages count',
    value: ''
  },
  {
    name: 'category',
    label: 'Category',
    value: ''
  }
];

export default function addFormInputsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ADD_FORM_VALUE:
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
