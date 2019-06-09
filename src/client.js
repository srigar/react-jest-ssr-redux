import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createStore from "./redux/store";
import App from "./app";

var axe = require("react-axe");
var store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

axe(React, ReactDOM, 1000);
