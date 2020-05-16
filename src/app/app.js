import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import NoMatchPage from "./pages/noMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/index", "/home"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
