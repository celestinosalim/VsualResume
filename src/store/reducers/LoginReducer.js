import jwtDecode from "jwt-decode";
// import login from "./LoginActions";

const initialState = (token => ({
  isAuthenticating: false,
  currentUser: token ? jwtDecode(token) : null,
  errorMessage: null
}))(localStorage.authToken);

const LoginReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    // case LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     isAuthenticating: true
    //   };
    // case LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     isAuthenticating: false,
    //     errorMessage: action.errorMessage
    //   };
    // case LOGIN_SUCCESS:
    //   return {
    //     isAuthenticating: false,
    //     currentUser: action.user,
    //     errorMessage: null
    //   };
    // case LOGOUT:
    //   return {
    //     isAuthenticating: false,
    //     currentUser: null,
    //     errorMessage: null
    //   };
    default:
      return state;
  }
};

export default LoginReducer;
