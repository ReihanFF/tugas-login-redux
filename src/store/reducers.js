import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  userData: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, userData: action.payload, loading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
