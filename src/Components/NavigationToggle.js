import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import logo from "../logo192.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const fonts = { fontSize: `14px`, color: `#212121` };

function ListItemLink(props) {
  return <ListItem button {...props} />;
}

export default function NavigationToggle() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <img src={logo} alt={"Make It Whoop Logo"} style={{ width: `15rem` }} />

        <ListItemLink component={Link} to="/">
          <ListItemText primary="Home" style={fonts} />
        </ListItemLink>

        <ListItemLink component={Link} to="/about">
          <ListItemText primary="About" style={fonts} />
        </ListItemLink>

        <ListItemLink component={Link} to="/players">
          <ListItemText primary="Players" style={fonts} />
        </ListItemLink>

        <ListItemLink component={Link} to="/contact">
          <ListItemText primary="Contact" style={fonts} />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon style={{ color: "#f50057" }} />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
