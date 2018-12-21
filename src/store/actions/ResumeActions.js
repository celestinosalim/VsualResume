import * as types from "./ActionTypes";

export const getResume = resume => {
  return {
    type: types.REQUEST_RESUME,
    resume //resume object
  };
};
