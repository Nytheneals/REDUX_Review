import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// 1.STORE
const middleware = applyMiddleware(thunk, createLogger());

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING  A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(rootReducer, middleware);

export default store;
