import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo-container">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>
      <div className="nav-links">
        <NavLink
          to="/iphone"
          className="nav-link iphone"
          activeClassName="navbar-link-active"
        >
          iPhone
        </NavLink>
        <NavLink
          to="/macbook"
          className="nav-link macbook"
          activeClassName="navbar-link-active"
        >
          MacBook Pro
        </NavLink>
        <NavLink
          to="/watch"
          className="nav-link watch"
          activeClassName="navbar-link-active"
        >
          Watch
        </NavLink>
        <NavLink
          to="/notify"
          className="nav-link notify"
          activeClassName="navbar-link-active"
        >
          Notify me
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
