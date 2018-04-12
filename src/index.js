// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./app";
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

import { createStore } from "redux";

// REDUX SUMMARY

// 1.REDUCER
// 2.STORE
// 3.SUBSCRIBE / LISTENER
// 4.DISPATCH

// 1.CREATING A REDUCER (PARAMS ARE STATE & ACTION FROM DSIPATCHER)
const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + action.payload;
  }
  if (action.type === "DEC") {
    return state - action.payload;
  }
  if (action.type === "MUT") {
    return state * action.payload;
  }
  return state; // FALL BACK INCASE THIS FAILS
};

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING  A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(reducer, 0);

// 3.CREATED A LISTENER (LOGS STATE)
store.subscribe(() => {
  console.log("The store changed", store.getState());
});

// 4.DISPATCH (TAKES IN A ACTION TYPE & PAYLOAD) // ACTION CREATOR
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 200 });
store.dispatch({ type: "DEC", payload: 12 });
store.dispatch({ type: "INC", payload: 200 });
store.dispatch({ type: "MUT", payload: 12 });
