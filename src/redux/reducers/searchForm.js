import { CHANGE_SEARCH_FORM_VALUE } from 'redux/actions/actionTypes';

const initialState = {
  name: 'search',
  label: 'Search by BookTitle and Authors',
  value: ''
};

export default function searchFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FORM_VALUE:
      return { ...state, value: action.value };
    default:
      return state;
  }
}
