import * as types from "../actions/ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_RESUME:
      return { ...state, ...action.resume };

    case types.UPDATE_PROFILE:
      return { ...state, ...action.profile };

    default:
      return state;
  }
};
