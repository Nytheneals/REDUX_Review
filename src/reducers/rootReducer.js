import { combineReducers } from "redux";

import tweets from "./tweetsReducers";
import user from "./userReducers";

const rootReducer = combineReducers({
  tweets: tweets,
  user: user
});

export default rootReducer;
