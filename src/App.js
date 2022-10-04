import './App.css';
import Home from "./components/Home"
import {Route, Switch} from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Nav/>
            <Home/>
          </Route>

          <Route path="/about">
            <Nav/>
            <About/>
          </Route>

          <Route path="/timer">
            <Nav/>
            <Timer/>
          </Route>
      </Switch>
    </div>
  );
};

export default App;
