import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
// import apple from "../assets/images/apple.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="welcome-title-container">
          <p className="welcome-title">Welcome to Apple</p>
          <p className="products-title">See Our Products</p>
          <div className="icons">
            <p className="iphone-icon">iPhone</p>
            <p className="mac-icon">Mac</p>
            <p className="watch-icon">Watch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
