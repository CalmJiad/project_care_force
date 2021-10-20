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
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Menubar from './Components/Menubar/Menubar';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Services from "./Components/Services/Services";
import ServiceDetails from "./Components/ServicesDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="*"> 
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
