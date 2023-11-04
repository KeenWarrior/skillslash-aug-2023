import { LOADING } from "../consts/authState";

const initialState = {
  user: null,
  authState: LOADING,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload.user,
        authState: action.payload.authState,
      };
    default:
      return state;
  }
};

export default authReducer;