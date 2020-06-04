import React, { useState, useEffect } from "react";

import Iframe from "react-iframe";

import { v4 as uuidv4 } from "uuid";

import PostItem from "../Components/PosItem";
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
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Alert from "@material-ui/lab/Alert";

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
  const [ertitle, seterTitle] = useState(false);

  const [field, setField] = useState({
    media: "",
    title: "",
    content: "",
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

    if (field.content.length < 1) {
      seterPost(true);
    }

    if (!field.title) {
      seterTitle(true);
      return;
    }
    const id = { id: uuidv4() };
    firebase.thePost(props.match.params.id, {
      [id.id]: [{ date: new Date(), ...field }],
      reference: id,
    });
    setField(field);
    setPost();
    seterPost(false);
    seterTitle(false);
  };

  const getAllPost = firebase.getPost;

  useEffect(() => {
    firebase.getPost(props.match.params.id, setPosts);
  }, []);

  useEffect(() => {
    firebase.thePlayer(props.match.params.id, setPlayer);
  }, [firebase, props.match.params.id]);

  console.log(player);
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

                  {player.eval && (
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        style={{ backgroundColor: `rgb(249, 227, 239)` }}
                        expandIcon={
                          <ExpandMoreIcon style={{ color: `#f50057` }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          style={{
                            color: `#f50057`,
                            fontWeight: 400,
                            margin: 0,
                          }}
                        >
                          Player Evaluation
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography align="left">{player[`eval`]}</Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
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
                          DOB:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`DOB`]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Class of:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player[`gradYear`]}
                        </Typography>

                        {player.rating && (
                          <div>
                            {" "}
                            <Typography
                              variant="body2"
                              component="p"
                              className={classes.profileTitle}
                            >
                              rating:
                            </Typography>
                            <Typography variant="body2" component="p">
                              {player[`rating`]}
                            </Typography>
                          </div>
                        )}

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

                        {player.status && (
                          <div>
                            {" "}
                            <Typography
                              variant="body2"
                              component="p"
                              className={classes.profileTitle}
                            >
                              rating:
                            </Typography>
                            <Typography variant="body2" component="p">
                              {player[`status`]}
                            </Typography>
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} md={9}>
                        {player.youtubeLink && (
                          <Iframe
                            url={player.youtubeLink.replace(
                              "https://www.youtube.com/watch?v=",
                              "https://www.youtube.com/embed/"
                            )}
                            width="426px"
                            height="250px"
                            allow="fullscreen"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                          />
                        )}
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Contact:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player.contactPhone && (
                            <span>
                              <strong>Phone Number:</strong>{" "}
                              {player[`contactPhone`]}
                            </span>
                          )}
                          <br />
                          {player.contactEmail && (
                            <span>
                              <strong>Email</strong>: {player[`contactEmail`]}
                            </span>
                          )}
                          <br />
                          {player.gmailing && (
                            <span>
                              <strong> Mailing Address</strong>:{" "}
                              {player[`gmailing`]}
                            </span>
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Social Media:
                        </Typography>
                        <Typography variant="body2" component="p">
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
                          {(player.tiktok === "na" || "") && (
                            <span>
                              <strong>Tik Tok</strong>: {player[`tiktok`]}
                              <br />
                            </span>
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Guardian:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player.relationship && (
                            <span>
                              <strong>Relationship</strong>:{" "}
                              {player[`relationship`]}
                            </span>
                          )}
                          <br />
                          {player.guardianfname && (
                            <span>
                              <strong>First Name</strong>:{" "}
                              {player[`guardianfname`]}
                            </span>
                          )}
                          <br />
                          {player.guardianlname && (
                            <span>
                              <strong>Last Name</strong>:{" "}
                              {player[`guardianlname`]}
                            </span>
                          )}
                          <br />
                          {player.gphone && (
                            <span>
                              <strong>Phone</strong>: {player[`gphone`]}
                            </span>
                          )}
                          <br />
                          {player.gemail && (
                            <span>
                              <strong>Email</strong>: {player[`gemail`]}
                            </span>
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          My Game:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player.style && (
                            <span>
                              <strong>Style of play</strong>: {player[`style`]}
                            </span>
                          )}

                          {player.favorite && (
                            <span>
                              <strong>Favourite aspect of my game</strong>:{" "}
                              {player[`favorite`]}
                            </span>
                          )}
                          <br />
                          <br />
                          {player.develop && (
                            <span>
                              <strong>Looking to develop</strong>:{" "}
                              {player[`develop`]}
                            </span>
                          )}
                          <br />
                          <br />
                          {player.interest && (
                            <span>
                              <strong>
                                Institutions that have shown interest
                              </strong>
                              :<br /> {player[`interest`].split(",").join(",")}
                            </span>
                          )}
                          <br />
                          <br />
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Academics:
                        </Typography>
                        <Typography variant="body2" component="p">
                          {player.sat && (
                            <span>
                              <strong>SAT Score</strong>: {player[`sat`]}
                            </span>
                          )}
                          <br />
                          {player.sat && (
                            <span>
                              <strong>SAT Score</strong>: {player[`sat`]}
                            </span>
                          )}
                          <br />
                          {player.act && (
                            <span>
                              <strong>ACT Score</strong>: {player[`act`]}
                            </span>
                          )}
                          <br />
                          {player.gpa && (
                            <span>
                              <strong>GPA Score</strong>: {player[`gpa`]}
                            </span>
                          )}
                          <br />
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
                    {/*  <Button
                      onClick={() => setProfile(!profile)}
                      style={{ marginTop: `10px`, marginLeft: 5 }}
                      variant="contained"
                      color="primary"
                      startIcon={<AccountBoxIcon />}
                      disabled={post ? true : false}
                    >
                      Edit Profile
                 </Button> */}
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
                        {ertitle && (
                          <div>
                            <Alert severity="error">
                              Don't forget to provide a title
                            </Alert>
                          </div>
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
                            id="title"
                            label="Title"
                            variant="filled"
                            style={{ margin: 8 }}
                            helperText="required"
                            margin="normal"
                            name="title"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={handlePost}
                          />
                          <TextField
                            fullWidth
                            id="content"
                            label="details"
                            style={{ margin: 8 }}
                            placeholder=""
                            error={field.content ? true : false}
                            helperText="required"
                            margin="normal"
                            multiline
                            rowsMax="4"
                            value={field.content}
                            variant="filled"
                            name="content"
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
                  posts.post.reverse().map((post) => {
                    return <PostItem post={post} key={uuidv4()} />;
                  })}
              </Grid>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}
