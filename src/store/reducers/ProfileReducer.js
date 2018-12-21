import * as types from "../actions/ActionTypes";

initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      return state.map(resume =>
        resume.id === action.resume.id ? action.resume : resume
      );

    case types.RESET_FORM:
      return state;

    default:
      return state;
  }
};
