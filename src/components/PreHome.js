import React from "react";
import "../css/PreHome.css";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";
import apple from "../assets/images/apple.png";

class PreHome extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <div className="pre-home">
        <div className="pre-nav">
          <img src={logo} className="pre-nav-logo" alt="logo" />>
        </div>
        <div className="pre-home-page">
          <img src={apple} alt="apple" className="pre-apple" />
          <div className="year">20190000000000000000000000000000000</div>
        </div>
      </div>
    );
  }
}

// const PreHome = () => {
//   return (
//     <div className="home">
//       <div className="nav">
//         <img src={logo} className="nav-logo" alt="logo" />>
//       </div>
//       <div className="home-page">
//         <div className="im">
//           <img src={apple} alt="apple" className="apple" />
//         </div>
//         <div className="year">20190000000000000000000000000000000</div>
//       </div>
//     </div>
//   );
// };

export default PreHome;
