import * as types from "../actions/ActionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      return state.map(resume =>
        resume.id === action.resume.id ? action.resume : resume
      );

    default:
      return state;
  }
};
