
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

      <Switch>
        <Route path="/:roomCode">
          <Conference />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
