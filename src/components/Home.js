import React from "react";
import "../css/Home.css";
import { NavLink, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import apple from "../assets/images/apple-gray.png";
import iphone from "../assets/images/iphone.png";
import mac from "../assets/images/mac.png";
import watch from "../assets/images/watch.png";

const isAuth = () => {
  if (!localStorage.getItem("apple-token")) return false;
  else return true;
};

const Home = () => {
  if (isAuth()) {
    return (
      <div>
        ProtectedComponent
        <Navbar />
        <div className="home">
          <img src={apple} alt="apple" className="apple" />
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
  } else {
    return <Redirect to="/?error=403" />;
  }
};

export default Home;
