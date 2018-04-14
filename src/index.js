import React from "react";
import render from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./containers/store";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
