import React from "react";
import "../css/Icons.css";
import { NavLink } from "react-router-dom";
import iphone from "../assets/images/iphone.png";
import mac from "../assets/images/mac.png";
import watch from "../assets/images/watch.png";

const Icons = () => {
  return (
    <div className="vertical-icons">
      <NavLink to="/iphone" activeClassName="icon-active">
        <img
          id="iphone"
          src={iphone}
          alt="iPhone"
          className="iphone-icon-vertical"
        />
      </NavLink>
      <NavLink to="/macbook" activeClassName="icon-active">
        <img src={mac} alt="MacBook" className="mac-icon-vertical" />
      </NavLink>
      <NavLink to="/watch" activeClassName="icon-active">
        <img src={watch} alt="Watch" className="watch-icon-vertical" />
      </NavLink>
    </div>
  );
};
// const handleClick = () => {
//   var element = document.getElementById("iphone");
//   element.classList.add("icon-active");
//   console.log(this.location.pathname);
// };

export default Icons;
