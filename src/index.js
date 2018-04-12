import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

// REDUX THUNK ALLOWS USE TO CREATE ACTION CREATORS
// REDUX SUMMARY

// 1.REDUCER
// 2.STORE
// 3.SUBSCRIBE / LISTENER
// 4.DISPATCH

// INITIAL STATE
const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

// 1.CREATING A REDUCER (PARAMS ARE STATE & ACTION FROM DSIPATCHER)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        users: [],
        error: null
      };
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: action.payload
      };
      break;
    }

    case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
      break;
    }
  }
  return state;
};
// CUSTOM MIDDLEWARE

const middleware = applyMiddleware(thunk, createLogger());

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING  A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(reducer, middleware);

// 4.DISPATCH (TAKES IN A ACTION TYPE & PAYLOAD) // ACTION CREATOR
// THUNK MIDDLEWARE LETS US HAVE MULTIPLE ACTIONS IN ONE DISPATCH FUNCTION
store.dispatch(dispatch => {
  // ACTION ONE
  dispatch({ type: "FETCH_USERS_START" });
  axios
    .get("http://5826ed963900d612000138bd.mockapi.io/items")
    .then(response => {
      // ACTION TWO
      dispatch({ type: "RECEIVE_USERS", payload: response.data });
    })
    .catch(err => {
      // ACTION THREE
      dispatch({ type: "FETCH_USERS_ERROR", payload: err });
    });
});
