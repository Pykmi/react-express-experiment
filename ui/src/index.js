import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import About from "./About";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
