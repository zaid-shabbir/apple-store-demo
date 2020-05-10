import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";
import PreHome from "./components/PreHome";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
import Macbook from "./components/Macbook";

function isAuth() {
  if (!localStorage.getItem("apple-token")) return false;
  else return true;
}

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/prehome" component={PreHome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/iphone" component={Iphone} />
          <Route
            exact
            path="/macbook"
            render={() =>
              isAuth() ? <Macbook /> : <Redirect to="/?error403" />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
