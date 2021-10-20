import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Menubar from './Components/Menubar/Menubar';
import Services from "./Components/Services/Services";
import ServiceDetails from "./Components/ServicesDetails/ServiceDetails";

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
          <Route path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
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
