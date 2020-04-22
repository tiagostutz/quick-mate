
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Conference from "./routes/Conference";

function App() {
  return (
    <Router>
      <div className="horizontal-menu">

        <Switch>
          <Route path="/:roomCode">
            <Conference />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="text-muted text-center text-md-left">2020 <a href="https://github.com/flaviostutz/quick-mate" rel="noopener noreferrer" target="_blank">QuickMATE</a>. MIT License</p>
          <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">Spread the <i className="mb-1 text-primary ml-1 icon-small" data-feather="heart"></i></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
