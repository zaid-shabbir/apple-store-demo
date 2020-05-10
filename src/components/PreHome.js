import React from "react";
import "../css/PreHome.css";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";
import apple from "../assets/images/apple.png";
import CountUp from "react-countup";

class PreHome extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    // this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
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
          <div className="counter">
            <CountUp
              className="year first-digit"
              duration={3}
              start={0}
              separator=" "
              end={2}
            />
            <CountUp
              className="year second-digit"
              duration={3}
              start={20}
              separator=" "
              end={0}
            />
            <CountUp
              className="year third-digit"
              duration={2}
              start={30}
              separator=" "
              end={1}
            />
            <CountUp
              className="year fourth-digit"
              duration={2}
              start={50}
              separator=" "
              end={9}
            />
          </div>
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
