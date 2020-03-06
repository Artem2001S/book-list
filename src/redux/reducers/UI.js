import {
  START_API_REQUEST,
  FINISH_API_REQUEST
} from 'redux/actions/actionTypes';

const initialState = { isLoading: false };

export default function UIReducer(state = initialState, action) {
  switch (action.type) {
    case START_API_REQUEST:
      return { ...state, isLoading: true };
    case FINISH_API_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
