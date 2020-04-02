import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 500,
    margin: "50px"
  }
});

export default function PlayerItem({ player }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={player["First Name"]}
          height="250"
          image={player["profilePicURL"]}
          title={player["First Name"]}
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="primary"
            style={{ marginBottom: "10px" }}
          >
            {player["First Name"]} {}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Position: {player["Position"]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Height {player["Height"]}
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="p">
            Teams:
            <br />
            High School: {player["High School"]}
            <br />
            Preparatory/School Team: {player["Preparatory/School Team"]}
            <br />
            Summer/AAU Team: {player["Summer/AAU Team"]}
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Follow
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
