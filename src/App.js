import React from "react";
import "./App.css";
import JobList from "./components/JobList";
import Job from "./components/Job";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route
            exact
            path="/user/:id" component={Job} />
          />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
