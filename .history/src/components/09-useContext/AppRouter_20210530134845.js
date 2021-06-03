import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};
