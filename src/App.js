import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"; // Importa tu componente Nav
import Home from "./components/Home";
import Questions from "./components/Questions";
import About from "./components/About";
import Timer from "./components/Timer";
import "./App.css"; // Importa el archivo de estilos global si lo tienes

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />{" "}
        {/* Renderiza Nav fuera del Switch para que esté presente en todas las rutas */}
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
            path="/farmaco"
            render={(props) => (
              <>
                <Questions {...props} category="farmaco" />
              </>
            )}
          />

          <Route path="/about">
            <About />
          </Route>

          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
