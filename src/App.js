import React from "react";
import "./App.css";
import JobContainer from "./containers/JobContainer";
import JobListContainer from "./containers/JobListContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={JobListContainer} />
          <Route exact path="/job/:id" component={JobContainer} />
          />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
