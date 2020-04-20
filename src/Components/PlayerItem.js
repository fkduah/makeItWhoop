import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 345,
    minHeight: 180,
    height: "auto",
    margin: 20,
    justifyContent: "space-between",
    borderRadius: 10,
    "&:hover": {
      boxShadow:
        "0px 4px 4.5px -2.5px rgba(245,0,87,0.2), 0px 7.5px 11px 1px rgba(0,0,0,0.14), 0px 3px 14px 2.5px rgba(245,0,87,0.12)",
      cursor: "pointer",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  content: {
    paddingBottom: "0px !important",
    flex: "1 0 auto",
  },
  avatar: {
    width: 125,
    height: 125,
    margin: 10,
  },
  name: {
    fontFamily: ["Anton", "sans-serif"],
  },
}));

export default function PlayerItem({ player }) {
  const classes = useStyles();

  return (
    <Link to={`/players/${player["id"]}`}>
      <Card xs={6} elevation={15} className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.name}>
              {player["firstName"]}{" "}
              <span style={{ color: "#f50057", fontFamily: "Anton" }}>
                {player["lastName"]}
              </span>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              Position: <strong> {player["position"]}</strong>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              Height: <strong> {player["height"]}</strong>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              School: <strong>{player["winterTeam"]}</strong>
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardContent>
        </div>
        <Avatar
          alt={[player["firstName"], player["lastName"]].toString()}
          src={player["profilePicURL"]}
          className={classes.avatar}
        />
      </Card>
    </Link>
  );
}
