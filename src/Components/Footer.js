import React from "react";


import "../../src/App.css";


import grey from "@material-ui/core/colors/grey";
import {
  makeStyles,
  Toolbar,
  AppBar,
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    top: "auto",
    bottom: 0,
    position: "fixed",
   left: 0,
   width: "100%"
  },
 
  copyright: {
    flexGrow: 1
  },
  menuItem: {
    margin: `auto 10px`
  },
  menuItems: {}
}));

const primary = grey[900];

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display:"flex"}}>
        <Toolbar style={{ backgroundColor: primary }}>
          <p className={classes.copyright}>
            &copy; Make It Whoop {year}
          </p>
          <div style={{ margin: `auto 5%`, display: `flex` }}>
           <p className={classes.menuItem}><a href="/#">Facebook</a></p>
           <p className={classes.menuItem}><a href="/#">Instagram</a></p>
           <p className={classes.menuItem}><a href="/#">Social</a></p>
          </div>        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
