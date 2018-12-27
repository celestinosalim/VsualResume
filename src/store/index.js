import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// import LoginReducer from "./reducers/LoginReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import ResumeReducer from "./reducers/ResumeReducer";
import EducationReducer from "./reducers/EducationReducer";

const rootReducer = combineReducers({
  // login: LoginReducer,
  profile: ProfileReducer,
  resume: ResumeReducer,
  education: EducationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
