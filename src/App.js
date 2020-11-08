import React from "react";
import "./styles.css";
import Home from "./containers/Home";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Stories from "./containers/Stories";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
