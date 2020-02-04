import React, { createContext, Component } from "react";

export const FirebaseContext = createContext();

class FirebaseProvider extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <FirebaseContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

export default FirebaseProvider;
