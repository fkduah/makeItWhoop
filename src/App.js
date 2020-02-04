import React from "react";

import FirebaseProvider from "./firebaseContext";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import RegistrationPage from "./Components/RegistrationPage";
import ContactPage from "./Components/ContactPage";

import { Route, Switch } from "react-router-dom";

import "../src/App.css";

import { signOutUser } from "./firebase";

signOutUser();

function App() {
  return (
    <>
      <FirebaseProvider>
        <Navigation />
        <Switch>
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/Registration" component={RegistrationPage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </FirebaseProvider>
    </>
  );
}

export default App;
