import React from "react";

import Iframe from "react-iframe";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, Button } from "@material-ui/core";

import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: "left",
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: 600,
    textTransform: "capitalize",
    marginBottom: 0,
    textAlign: "left",
  },
  date: {
    fontSize: 12,
    textAlign: "right",
  },
  profileImgWrap: {
    //  height: `100%`,
    //     width: `100%`,
  },
}));

export default function PostItem(props) {
  const firebase = useFirebase();

  const { post } = props;

  const postID = post.reference.id;
  const postDetails = post[postID][0];

  // console.log(postDetails);

  // const day = postDetails.date.toDate().toString();

  // const deleteCurrentPost = () => {
  //   firebase.deletePost(props.id);
  // };

  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={20}>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <h3 className={classes.title}>{postDetails && postDetails.title}</h3>
        </Grid>
        <Grid item sm={6}>
          <p className={classes.date}>date</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          {postDetails.media === "video" && (
            <Iframe
              url={postDetails.media.videoURL}
              width="100%"
              // height={150}
              id="myId"
              className=""
              display="initial"
              position="relative"
              allow="fullscreen"
              style={{ marginBottom: 20, boxShadow: "3px 3px 15px #650f2d" }}
            />
          )}
          {postDetails.media === "image" && (
            <img
              src={postDetails.imageURL}
              alt="Post"
              width="100%"
              style={{ marginBottom: 20, boxShadow: "3px 3px 15px #650f2d" }}
            />
          )}
          {!postDetails.media && (
            <Avatar
              elevation={20}
              variant="square"
              className={classes.profileImgWrap}
              style={{ marginBottom: 20, width: "80%", height: "80%" }}
            ></Avatar>
          )}
        </Grid>
        <Grid item xs={12} sm={9}>
          <h4 style={{ textAlign: "left", marginTop: "0px" }}>
            <FormatQuoteIcon
              style={{ transform: `scaleX(-1)`, color: "#f50057" }}
            />
            {postDetails.content && postDetails.content}
            <FormatQuoteIcon style={{ color: "#f50057" }} />
          </h4>
          {/* <Button
            onClick={deleteCurrentPost}
            variant="contained"
            style={{
              backgroundColor: `#212121`,
              color: `#f1f1f1`,
              marginLeft: 8,
              marginTop: 20,
              marginBottom: 20,
              float: `right`,
              fontSize: "10px",
            }}
            startIcon={<CancelPresentationIcon />}
          >
            Delete Post
          </Button> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
