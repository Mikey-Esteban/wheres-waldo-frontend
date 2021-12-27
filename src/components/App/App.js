import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Picture from "../Picture/Picture";
import Home from "../Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/social-distancing" component={Picture} />
        <Route exact path="/merry-go-round" component={Picture} />
        <Route exact path="/snow" component={Picture} />
      </Switch>
    </Router>
  );
};

export default App;
