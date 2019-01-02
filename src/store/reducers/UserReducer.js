import * as types from "../actions/ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};
