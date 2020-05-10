import React from "react";
import "../css/Icons.css";
import { Link } from "react-router-dom";
import iphone from "../assets/images/iphone.png";
import mac from "../assets/images/mac.png";
import watch from "../assets/images/watch.png";

const Icons = () => {
  return (
    <div className="vertical-icons">
      <Link to="/iphone">
        <img src={iphone} alt="iPhone" className="iphone-icon-vertical" />
      </Link>
      <Link to="/macbook">
        <img src={mac} alt="MacBook" className="mac-icon-vertical" />
      </Link>
      <Link to="/watch">
        <img src={watch} alt="Watch" className="watch-icon-vertical" />
      </Link>
    </div>
  );
};

export default Icons;
