import React from "react";
import "../css/Home.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import iphone from "../assets/images/iphone.png";
import mac from "../assets/images/mac.png";
import watch from "../assets/images/watch.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="welcome-title-container">
          <p className="welcome-title">Welcome to Apple</p>
          <p className="products-title">See Our Products</p>
          <div className="icons">
            <NavLink to="/iphone">
              <img src={iphone} alt="iPhone" className="iphone-icon" />
            </NavLink>
            <NavLink to="/macbook">
              <img src={mac} alt="MacBook" className="mac-icon" />
            </NavLink>
            <NavLink to="/watch">
              <img src={watch} alt="Watch" className="watch-icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
