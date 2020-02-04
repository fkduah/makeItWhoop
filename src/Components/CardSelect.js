import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import ModalRegister from "./ModalRegister";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10
  },
  media: {
    height: 300
  },
  copy: {
    minHeight: 175
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        {props.image && (
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.imageTitle}
          />
        )}
        <CardContent className={classes.copy}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Anton" }}
          >
            {props.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
        <ModalRegister
          buttonName={props.buttonName}
          modalTitle={props.modalTitle}
          modalDescript={props.modalDescript}
        />
      </CardActionArea>
    </Card>
  );
}
