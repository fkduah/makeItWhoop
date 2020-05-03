import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Alert from "@material-ui/lab/Alert";

import Iframe from "react-iframe";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  profileHeading: {
    marginTop: 50,
  },
  profileImgWrap: {
    height: `100%`,
    width: `100%`,
  },
  seperation: {
    height: 2,
    width: `50%`,
    background: `#F50053`,
    border: `none`,
    boxShadow: `2px 2px 5px #f50057`,
  },
  specs: {
    backgroundColor: `rgba(243, 196, 222, 0.49)`,
  },
  profileTitle: {
    color: `#f50057`,
    fontWeight: 600,
    marginTop: `10px`,
  },
  additionalDetails: {
    marginTop: `30px`,
    width: `100%`,
    textAlign: `left`,
    paddingLeft: `20px`,
  },
}));

export default function PlayerPage(props) {
  const classes = useStyles();

  const firebase = useFirebase();

  const [player, setPlayer] = useState();
  const [profile, setProfile] = useState(false);
  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState();
  const [erpost, seterPost] = useState(false);
  const [field, setField] = useState({
    media: "",
    postContent: "",
    imageURL: "",
    videoURL: "",
  });

  function handlePost(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setField({
      ...field,
      [evt.target.name]: value,
    });
  }

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (field.postContent.length < 1) {
      seterPost(true);
      return;
    } else {
      firebase.thePost(props.match.params.id, {
        date: new Date(),
        field,
      });
      setField({
        media: "",
        postContent: "",
        imageURL: "",
        videoURL: "",
      });
      setPost(false);
      seterPost(false);
    }
  };

  useEffect(() => {
    firebase.getPost(props.match.params.id, setPosts);
    firebase.thePlayer(props.match.params.id, setPlayer);
  }, [firebase, props.match.params.id]);

  console.log(player);
  console.log(props.match.params.id);

  return (
    <>
      <Container maxWidth={false} className="sectionTwoFluidWrapper">
        <Container fixed className="sectionTwoFixedWrapper">
          <div className={classes.contentWrap}>
            <Typography
              variant="h3"
              align="left"
              className={classes.headingText}
            >
              {player && player.firstName}
              <span className="standOutText"> {player && player.lastName}</span>
            </Typography>
            {player && (
              <Grid className={classes.profileHeading} container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={20}>
                    <Avatar
                      variant="rounded"
                      className={classes.profileImgWrap}
                      src={player["profilePicURL"]}
                    ></Avatar>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Paper
                    elevation={20}
                    style={{
                      padding: `15px`,
                      textAlign: `left`,
                    }}
                    className={classes.paper}
                  >
                    <Grid container spacing={3}>
                      <Grid className={classes.specs} item xs={12} md={3}>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Position:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`position`]}
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Height:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`height`]}
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Date of Birth:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`DOB`]}
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          School Team:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`winterTeam`]}
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Graduation Year:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`gradYear`]}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Favorite Move:
                        </Typography>
                        <Typography variant="body1" component="p">
                          {player[`favorite`]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          What Your Looking To Develop:
                        </Typography>
                        <Typography variant="body1" component="p">
                          {player[`develop`]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Social Media:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {(player.tiktok === "na" || "") && (
                            <span>
                              <strong>Tik Tok</strong>: {player[`tiktok`]}
                              <br />
                            </span>
                          )}
                          {player.twitter && (
                            <span>
                              <strong>Twitter</strong>:{" "}
                              <a
                                href={`https://www.twitter.com/${player[
                                  `twitter`
                                ].replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#212121" }}
                              >
                                {player[`twitter`]}
                              </a>
                              <br />
                            </span>
                          )}
                          {player.instagram && (
                            <span>
                              <strong>Instagram</strong>:{" "}
                              <a
                                href={`https://www.instagram.com/${player[
                                  `instagram`
                                ].replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#212121" }}
                              >
                                {player[`instagram`]}
                              </a>
                              <br />
                            </span>
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Contact:
                          <br />
                          <a
                            href={`mailto:www.makeitwhoop@gmail.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#212121" }}
                          >
                            {player.firstName} {player.lastName}
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  <div style={{ textAlign: "left" }}>
                    {!post && (
                      <Button
                        onClick={() => {
                          setPost(!post);
                          seterPost(false);
                        }}
                        style={{ marginTop: `10px`, marginRight: 5 }}
                        variant="contained"
                        color="secondary"
                        startIcon={<AccountBoxIcon />}
                        disabled={profile ? true : false}
                      >
                        Create Post
                      </Button>
                    )}
                    <Button
                      onClick={() => setProfile(!profile)}
                      style={{ marginTop: `10px`, marginLeft: 5 }}
                      variant="contained"
                      color="primary"
                      startIcon={<AccountBoxIcon />}
                      disabled={post ? true : false}
                    >
                      Edit Profile
                    </Button>
                  </div>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    {post && (
                      <div style={{}}>
                        {field.media === `video` &&
                          field.videoURL.length > 0 && (
                            <Iframe
                              url={field.videoURL}
                              width={300}
                              height={150}
                              id="myId"
                              className=""
                              display="initial"
                              position="relative"
                              allow="fullscreen"
                            />
                          )}
                        {field.media === "image" && field.imageURL.length > 0 && (
                          // eslint-disable-next-line jsx-a11y/img-redundant-alt
                          <img
                            src={`${field.imageURL}`}
                            alt="Post Image"
                            style={{
                              boxShadow: `5px 4px 11px 1px #753232`,
                              width: 150,
                            }}
                          />
                        )}
                        {erpost && (
                          <div>
                            <Alert severity="error">
                              Don't forget to provide the details!
                            </Alert>
                          </div>
                        )}
                        <form onSubmit={handleSubmitPost}>
                          <TextField
                            fullWidth
                            id="postContent"
                            label="details"
                            style={{ margin: 8 }}
                            placeholder=""
                            error={field.postContent ? true : false}
                            helperText="required"
                            margin="normal"
                            multiline
                            rowsMax="4"
                            value={field.postContent}
                            variant="filled"
                            name="postContent"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={handlePost}
                          />
                          <FormControl variant="filled" style={{ margin: 8 }}>
                            <InputLabel id="postMedia-label">Media</InputLabel>
                            <Select
                              name="media"
                              labelId="postMedia"
                              id="postMedia"
                              style={{ minWidth: 70, paddingRight: 30 }}
                              onChange={handlePost}
                              value={field.media}
                            >
                              <MenuItem value="">None</MenuItem>
                              <MenuItem value={"image"}>Image</MenuItem>
                              <MenuItem value={"video"}>Video</MenuItem>
                            </Select>
                          </FormControl>
                          {field.media === "image" && (
                            <TextField
                              label="Image URL"
                              variant="filled"
                              style={{ margin: 8 }}
                              name="imageURL"
                              value={field.imageURL}
                              onChange={handlePost}
                              fullWidth
                            />
                          )}
                          {field.media === "video" && (
                            <TextField
                              label="Embeded Video URL"
                              variant="filled"
                              style={{ margin: 8 }}
                              name="videoURL"
                              value={field.videoURL}
                              onChange={handlePost}
                              fullWidth
                            />
                          )}
                          <br />
                          <Button
                            onClick={handleSubmitPost}
                            variant="contained"
                            color="secondary"
                            startIcon={<PostAddIcon />}
                            type="submit"
                            value="Submit"
                          >
                            Add Post
                          </Button>
                          <Button
                            onClick={() => setPost(!post)}
                            variant="contained"
                            style={{
                              backgroundColor: `#212121`,
                              color: `#f1f1f1`,
                              marginLeft: 8,
                            }}
                            startIcon={<CancelPresentationIcon />}
                          >
                            Cancel Post
                          </Button>
                        </form>
                      </div>
                    )}
                  </div>
                  {profile && <div>Show Form</div>}
                </Grid>
                {posts &&
                  posts.post.map((post) => (
                    <Grid
                      key={post.date}
                      container
                      direction="column"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Paper className={classes.additionalDetails}>
                          Test
                        </Paper>
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}
