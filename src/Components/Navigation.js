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
  Hidden,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
} from "@material-ui/core/";

import "../../src/App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    display: "flex",
    zIndex: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  menuItem: {
    margin: `auto 10px`,
  },
  menuList: {
    backgroundColor: "#212121",
  },
}));

const primary = grey[900];

function Navigation() {
  const firebase = useFirebase();

  const isOnline = firebase.userLoginWatch;
  const logout = firebase.signOutUser;

  const [online, setOnline] = useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    // Update the document title using the browser API
    isOnline(setOnline);
  }, [isOnline]);

  const classes = useStyles();

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: primary }}>
          <Hidden only={["md", "lg"]}>
            <NavigationToggle />
          </Hidden>

          <Typography variant="h5" className={classes.title}>
            <Link to="/">Hoopers Loop</Link>
          </Typography>

          <div style={{ margin: `auto 5%`, display: `flex` }}>
            <Hidden smDown>
              <div>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Typography
                    variant="h6"
                    className={classes.menuItem}
                    style={{ textTransform: "capitalize", color: "white" }}
                  >
                    About
                  </Typography>
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                            className={classes.menuList}
                          >
                            <MenuItem onClick={handleClose}>
                              <Link to="/about">About Hooper Loop</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              {" "}
                              <Link to="/hoopers">About Hoopers</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              {" "}
                              <Link to="/scouts">About Scouts</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              {" "}
                              <Link to="/verification">About Verification</Link>
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>

              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/players">Players</Link>
              </Typography>
              <Typography variant="h6" className={classes.menuItem}>
                <Link to="/contact">Contact</Link>
              </Typography>
            </Hidden>
          </div>
          {online && (
            <Button
              color="inherit"
              onClick={(e) => {
                logout();
              }}
            >
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
