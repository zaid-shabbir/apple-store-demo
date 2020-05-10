import React from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import "../css/Iphone.css";
import iPhone from "../assets/images/Iphone 1.png";
import iPhoneFront from "../assets/images/apple-iphonexs-max-gold.png";
import iPhoneRare from "../assets/images/apple-iphonexs-max-gold-back-2.png";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="iphone-title-part">
            <p className="iphone-title">iPhone</p>
            <p className="iphone-title-sub">The Ultimate iPhone</p>
            <p className="iphone-title-description">
              The future is here. Join the iPhone Upgrade Program to get the
              latest iPhone - NOW!
            </p>
          </div>
          <div className="iphone-image-part">
            <img src={iPhone} alt="iPhone" className="iphone-image" />
          </div>
          <Icons />
        </div>
        <div className="bottom-part">
          <div className="inline">
            <div>
              <div className="price-tag">From $699</div>
              <div className="buy-now">Buy Now ></div>
            </div>
            <img
              src={iPhoneFront}
              alt="iPhone Front"
              className="iphone-front"
            />
            <img src={iPhoneRare} alt="iPhone Rare" className="iphone-rare" />
          </div>
          <div className="toggle-line">
            <div className="toggle-btn"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Iphone;
