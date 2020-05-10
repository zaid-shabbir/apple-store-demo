import React from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import "../css/Macbook.css";
import Mac from "../assets/images/laptop.png";
import AppleProducts from "../assets/images/shutterstock_-2.png";

const Macbook = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="macbook-title-part">
          <p className="macbook-title">MacBook Pro</p>
          <div className="macbook-title-sub">More Power. More Pro</div>
          <div>
            <p className="inline macbook-title-specs">8-Core</p>
            <p className="inline macbook-title-specs">32GB</p>
          </div>
          <div>
            <p className="inline macbook-title-specs-description">
              Intel processor
            </p>
            <p className="inline macbook-title-specs-description">Memory</p>
          </div>
        </div>
        <img src={Mac} alt="MacBook Pro" className="macbook-pro-image" />
        <Icons />
      </div>
      <div className="bottom-part-mac">
        <div className="inline">
          <div className="buy-now-mac">Buy Now ></div>
          <div className="apple-products">
            <img
              src={AppleProducts}
              alt="Apple Products"
              className="apple-products-image"
            />
          </div>
          <div className="subscription-form">
            <label htmlFor="email" className="subscribe-now">
              Subscribe Now
            </label>
            <input
              type="text"
              placeholder="Enter the email address."
              className="subscription-email-input"
            />
            <input
              type="submit"
              value="Subscribe"
              className="subscription-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
