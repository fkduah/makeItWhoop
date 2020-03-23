import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

import NavigationToggle from "./NavigationToggle";
import grey from "@material-ui/core/colors/grey";
import {
  makeStyles,
  Button,
  Typography,
  Toolbar,
  AppBar,
  Hidden
} from "@material-ui/core/";

import "../../src/App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 2
  },
  menuItem: {
    margin: `auto 10px`
  },
  menuItems: {}
}));

const primary = grey[900];

function Navigation() {
  const firebase = useFirebase();

  const isOnline = firebase.userLoginWatch;
  const logout = firebase.signOutUser;

  const [online, setOnline] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    isOnline(setOnline);
  }, [isOnline]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: primary }}>
          <Hidden only={["md", "lg"]}>
            <NavigationToggle />
          </Hidden>

          <Typography variant="h5" className={classes.title}>
            <Link to="/">Make It Happen</Link>
          </Typography>

          <div style={{ margin: `auto 5%`, display: `flex` }}>
            <Hidden smDown>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/about">About</Link>
              </Typography>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/players">Players</Link>
              </Typography>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/contact">Contact</Link>
              </Typography>
            </Hidden>
          </div>
          {online && (
            <Button color="inherit" onClick={logout()}>
              <Link to="">Logout</Link>
            </Button>
          )}
          {!online && (
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
