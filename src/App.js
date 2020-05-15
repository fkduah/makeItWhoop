import React from "react";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import RegistrationPage from "./Components/RegistrationPage";
import RegistrationFormWrap from "./Components/RegistrationFormWrap";
import LoginPage from "./Components/LoginPage";
import PlayersPage from "./Components/PlayersPage";
import PlayerPage from "./Components/PlayerPage";
import ContactPage from "./Components/ContactPage";
import HoopersPage from "./Components/HoopersPage";
import ScoutsPage from "./Components/ScoutsPage";

import { Route, Switch } from "react-router-dom";

import "../src/App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/about" component={AboutPage} />

        <Route exact path="/registration" component={RegistrationPage} />
        <Route
          exact
          path="/registration/:forms"
          component={RegistrationFormWrap}
        />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/hoopers" component={HoopersPage} />
        <Route exact path="/scouts" component={ScoutsPage} />
        <Route exact path="/players" component={PlayersPage} />
        <Route exact path="/players/:id" component={PlayerPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
