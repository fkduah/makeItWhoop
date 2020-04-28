import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

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

  const [player, setPlayer] = useState();
  const [profile, setProfile] = useState(false);
  const [post, setPost] = useState();

  const firebase = useFirebase();

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
                <Grid item xs={12} md={5}>
                  <Paper elevation={20}>
                    <Avatar
                      variant="rounded"
                      className={classes.profileImgWrap}
                      src={player["profilePicURL"]}
                    ></Avatar>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Paper
                    elevation={20}
                    style={{
                      padding: `15px`,
                      textAlign: `left`,
                    }}
                    className={classes.paper}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Position:
                        </Typography>
                        <Typography variant="h5" component="h5">
                          <strong>{player[`position`]}</strong>
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Height:
                        </Typography>
                        <Typography variant="h5" component="h5">
                          <strong>{player[`height`]}</strong>
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Date of Birth:
                        </Typography>
                        <Typography variant="h5" component="h5">
                          <strong>{player[`DOB`]}</strong>
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          School Team:
                        </Typography>
                        <Typography variant="h5" component="h5">
                          <strong> {player[`winterTeam`]}</strong>
                        </Typography>

                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Graduation Year:
                        </Typography>
                        <Typography variant="h5" component="h5">
                          <strong>{player[`gradYear`]}</strong>
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
                        <Typography variant="body1" component="h5">
                          <strong>{player[`favorite`]}</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          What Your Looking To Develop:
                        </Typography>
                        <Typography variant="body1" component="h5">
                          <strong>{player[`develop`]}</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Social Media:
                        </Typography>
                        <Typography variant="body2" component="h5">
                          {(player.tiktok !== "na" || "") && (
                            <span>
                              Tik Tok: <strong>{player[`tiktok`]}</strong>
                              <br />
                            </span>
                          )}
                          {player.twitter && (
                            <span>
                              Twitter:{" "}
                              <strong>
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
                              </strong>
                              <br />
                            </span>
                          )}
                          {player.instagram && (
                            <span>
                              Instagram:{" "}
                              <strong>
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
                              </strong>
                              <br />
                            </span>
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.profileTitle}
                        >
                          Contact{" "}
                          <a
                            href={`mailto:www.makeitwhoop@gmail.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#f50057" }}
                          >
                            {player.firstName}
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Button
                    onClick={() => setProfile(!profile)}
                    style={{ marginTop: `10px` }}
                    variant="contained"
                    color="primary"
                    startIcon={<AccountBoxIcon />}
                  >
                    Edit Profile
                  </Button>
                  <br />
                  {profile && <>Show Form</>}
                </Grid>
                <Paper className={classes.additionalDetails}>
                  <Grid item xs={12}>
                    Updates
                  </Grid>
                </Paper>
              </Grid>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}
