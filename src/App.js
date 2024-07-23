import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Questions from "./components/Questions";
import About from "./components/About";
import "./App.css";
import Drill from "./components/Drill";
import DrillQuestions from "./components/DrillQuestions";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />{" "}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route
            path="/fisio"
            render={(props) => (
              <>
                <Questions {...props} category="fisio" />
              </>
            )}
          />

          <Route
            path="/micro"
            render={(props) => (
              <>
                <Questions {...props} category="micro" />
              </>
            )}
          />

          <Route
            path="/microfungi"
            render={(props) => (
              <>
                <Questions {...props} category="micro" />
              </>
            )}
          />

          <Route
            path="/microvirus"
            render={(props) => (
              <>
                <Questions {...props} category="micro" />
              </>
            )}
          />

          <Route
            path="/microbacterium"
            render={(props) => (
              <>
                <Questions {...props} category="micro" />
              </>
            )}
          />

          <Route
            path="/farmaco"
            render={(props) => (
              <>
                <Questions {...props} category="farmaco" />
              </>
            )}
          />

          <Route exact path="/drill">
            <Drill />
          </Route>

          <Route
            path="/drill/:subject"
            render={(props) => (
              <>
                <DrillQuestions {...props} />
              </>
            )}
          />

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
