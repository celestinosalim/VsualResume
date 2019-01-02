import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import ResumeReducer from "./reducers/ResumeReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  resume: ResumeReducer,
  user: UserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
