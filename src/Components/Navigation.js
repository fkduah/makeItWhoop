import React from "react";

import { Link } from "react-router-dom";

import "../../src/App.css";

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

const useStyles = makeStyles(theme => ({
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: primary }}>
          <Hidden only={["md", "lg"]}>
            <NavigationToggle />
          </Hidden>

          <Typography variant="h5" className={classes.title}>
            <Link to="/">Make It Whoop</Link>
          </Typography>

          <div style={{ margin: `auto 5%`, display: `flex` }}>
            <Hidden smDown>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/about">About</Link>
              </Typography>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/registration">Registration</Link>
              </Typography>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/contact">Contact</Link>
              </Typography>
            </Hidden>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
