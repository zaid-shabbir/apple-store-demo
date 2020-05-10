import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";
import account from "../assets/images/account_circle-24px.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignOut = () => {
      this.props.history.push("/");
    };
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo-container">
          <NavLink to="/prehome">
            <img src={logo} alt="logo" className="nav-logo" />
          </NavLink>
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

          <div className="nav-link sign-out-btn">
            <img src={account} alt="account-svg" className="svg" />
            <span className="sign-out-text" onClick={this.handleSignOut}>
              Sign-Out
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
