import userDataReducer from "./userData";
import jobDataReducer from "./jobData";
import applicationsDataReducer from "./applicationData";

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";



const rootReducer = combineReducers({
  userData: userDataReducer,
  jobData: jobDataReducer,
  applicationsData: applicationsDataReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
