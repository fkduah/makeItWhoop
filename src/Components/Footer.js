import React from "react";

import "../../src/App.css";

import grey from "@material-ui/core/colors/grey";
import { makeStyles, Toolbar, AppBar } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100%",
    marginTop: 50,
    position: "fixed",
  },

  copyright: {
    flexGrow: 1,
  },
  menuItem: {
    margin: `auto 10px`,
  },
  menuItems: {},
}));

const primary = grey[900];

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar style={{ backgroundColor: primary }}>
          <p className={classes.copyright}>&copy; Hoopers Loop {year}</p>
          <div style={{ margin: `auto 5%`, display: `flex` }}>
            <p className={classes.menuItem}>
              <a href="https://www.instagram.com/hoopersloop/" targer="_blank">
                Instagram
              </a>
            </p>
            <p className={classes.menuItem}>
              <a href="https://twitter.com/hoopersloop/" targer="_blank">
                Twitter
              </a>
            </p>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
