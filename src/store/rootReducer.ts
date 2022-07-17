import { combineReducers } from "redux";
import { userRegistration } from "./User/reducer";
const rootReducer = combineReducers({
  userRegistration,
});

export default rootReducer;
