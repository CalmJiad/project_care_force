import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div>
      <Router>
      <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*"> 
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
