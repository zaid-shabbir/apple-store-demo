import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo-container">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>
      <div className="nav-links">
        <Link to="/iphone" className="nav-link iphone">
          iPhone
        </Link>
        <Link to="/macbook" className="nav-link macbook">
          MacBook Pro
        </Link>
        <Link to="/watch" className="nav-link watch">
          Watch
        </Link>
        <Link to="/notify" className="nav-link notify">
          Notify me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
