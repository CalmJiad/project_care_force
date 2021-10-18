import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div>
      <Router>
      <Menubar></Menubar>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
