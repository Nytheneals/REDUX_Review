// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./app";
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

import { combineReducers, createStore } from "redux";

// REDUX SUMMARY

// 1.REDUCER
// 2.STORE
// 3.SUBSCRIBE / LISTENER
// 4.DISPATCH

// 1.CREATING A REDUCER (PARAMS ARE STATE & ACTION FROM DSIPATCHER)
// IN THE USER REDUCER I'M PASSING DEFAULT STATE AS AN OBJECT
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "NAME_CHANGE": {
      state = { ...state, name: action.payload };
      break;
    }
    case "AGE_CHANGE": {
      state = { ...state, age: action.payload };
      break;
    }
  }
  return state;
};
// IN THE TWEETS REDUCER I'M PASSING DEFAULT STATE AS AN ARRAY
const tweetsReducer = (state = [], action) => {
  return state;
};

// COMBINED REDUCERS
const rootReducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING  A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(rootReducers);

// 3.CREATED A LISTENER (LOGS STATE)
store.subscribe(() => {
  console.log("The store changed");
  console.table(store.getState());
});

// 4.DISPATCH (TAKES IN A ACTION TYPE & PAYLOAD) // ACTION CREATOR
store.dispatch({ type: "NAME_CHANGE", payload: "WILL" });
store.dispatch({ type: "AGE_CHANGE", payload: 200 });
store.dispatch({ type: "AGE_CHANGE", payload: 240 });
