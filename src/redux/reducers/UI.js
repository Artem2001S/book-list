import {
  START_API_REQUEST,
  FINISH_API_REQUEST,
  ERROR_API_REQUEST
} from 'redux/actions/actionTypes';

const initialState = { isLoading: false, haveErrors: false };

export default function UIReducer(state = initialState, action) {
  switch (action.type) {
    case START_API_REQUEST:
      return { ...state, isLoading: true, haveErrors: false };
    case FINISH_API_REQUEST:
      return { ...state, isLoading: false, haveErrors: false };
    case ERROR_API_REQUEST:
      return { ...state, isLoading: false, haveErrors: action.payload || true };
    default:
      return state;
  }
}
