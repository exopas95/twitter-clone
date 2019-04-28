import { combineReducers, reducer } from "redux";

import nav from "./navigation";

export default client =>
  combineReducers({
    apollo: client.reducer(),
    nav
  });
