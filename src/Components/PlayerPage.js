import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@material-ui/core";

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
                <Grid item xs={12} md={6}>
                  <Avatar
                    variant="rounded"
                    className={classes.profileImgWrap}
                    src={player["profilePicURL"]}
                  ></Avatar>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper
                    style={{
                      paddingTop: `50px`,
                      paddingLeft: `20px`,
                      textAlign: `left`,
                    }}
                    className={classes.paper}
                  >
                    <Typography variant="h5" component="h5">
                      <strong className={classes.profileTitle}>The</strong>{" "}
                      Baller
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h5">
                      <strong>Position:</strong> {player[`position`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Height:</strong> {player[`height`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Date of Birth:</strong> {player[`DOB`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>School Team:</strong> {player[`winterTeam`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Graduation Year:</strong> {player[`gradYear`]}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h5">
                      <strong className={classes.profileTitle}>Social</strong>{" "}
                      Media
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Instagram:</strong> {player[`instagram`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Twitter:</strong> {player[`twitter`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <strong>Tik Tok:</strong> {player[`tiktok`]}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      <br />
                      <strong className={classes.profileTitle}>Contact</strong>
                      Info
                    </Typography>
                  </Paper>
                </Grid>
                <Paper className={classes.additionalDetails}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ paddingTop: `20px` }}
                    >
                      <strong className={classes.profileTitle}>Favorite</strong>{" "}
                      Move
                    </Typography>
                    <Typography variant="body1" component="h6">
                      <strong>{player[`favorite`]}</strong>
                    </Typography>

                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ paddingTop: `20px` }}
                    >
                      <strong className={classes.profileTitle}>
                        What Your Looking To
                      </strong>{" "}
                      Develop
                    </Typography>
                    <Typography variant="body1" component="h6">
                      <strong>{player[`develop`]}</strong>
                    </Typography>
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
