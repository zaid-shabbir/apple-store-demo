import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Iphone from "./components/Iphone"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/iphone" component={Iphone}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
