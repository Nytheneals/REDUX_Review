// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./app";
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

import { applyMiddleware, createStore } from "redux";

// REDUX SUMMARY

// 1.REDUCER
// 2.STORE
// 3.SUBSCRIBE / LISTENER
// 4.DISPATCH

// 1.CREATING A REDUCER (PARAMS ARE STATE & ACTION FROM DSIPATCHER)

const reducer = (initialState = 0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  }
  if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
};

// CUSTOM MIDDLEWARE
const logger = store => next => action => {
  console.log("action fired", action);
};

const middleware = applyMiddleware(logger);

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING  A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(reducer, 1, middleware);

// 3.CREATED A LISTENER (LOGS STATE)
// store.subscribe(() => {
//   console.log("The store changed");
//   console.log(store.getState());
// });

// 4.DISPATCH (TAKES IN A ACTION TYPE & PAYLOAD) // ACTION CREATOR
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "DEC" });
