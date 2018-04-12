import React, { Component } from "react";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MY REDUX APP</h1>
      </div>
    );
  }
}

export default App;

// simple reducer
const helloReducer = () => ({ Welcome: "Welcome to Redux" });
const store = createStore(helloReducer);
console.log(store);
