import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="MenuBar-container">
        <div className="container">
          <div className="row m-auto p-1">
            <div className="col-md-2">
              <div className="logo-brand">
                <p className="brand"><i class="fas fa-heartbeat"></i>Medi Care</p>
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container">
                <ul className="d-flex align-items-end justify-content-end">
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/services" className="items">
                    <li>Services</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About us</li>
                  </Link>
                  <Link to="/contact" className="items">
                    <li>Contact</li>
                  </Link>
                  <Link to="/login" className="items">
                    <li>Log In</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;