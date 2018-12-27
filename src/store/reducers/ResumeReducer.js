import * as types from "../actions/ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_RESUME:
      // console.log(action.resume.resume.profile);
      return action.resume;

    case types.REQUEST_PROFILE:
      // console.log(action.resume.resume.profile);
      return action.resume.resume.profile;

    case types.REQUEST_EDUCATION:
      // console.log(action.educations);
      return action.educations;

    default:
      return state;
  }
};
