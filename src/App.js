import React from "react";

import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import RegistrationPage from "./Components/RegistrationPage";
import ContactPage from "./Components/ContactPage";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "../src/App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/Registration" component={RegistrationPage} />
        <Route exact path="/Contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
