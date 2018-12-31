import * as types from "../actions/ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_RESUME:
      return { ...state, ...action.resume };

    case types.UPDATE_PROFILE:
      return { ...state, ...action.profile };

    case types.UPDATE_EDUCATION:
      return { ...state, ...action.education };

    case types.UPDATE_EXPERIENCE:
      return { ...state, ...action.experience };

    case types.UPDATE_PROJECTS:
      return { ...state, ...action.projects };
    case types.UPDATE_SKILLS:
      return { ...state, ...action.skills };

    case types.UPDATE_SOCIALMEDIA:
      return { ...state, ...action.social_medium };

    default:
      return state;
  }
};
