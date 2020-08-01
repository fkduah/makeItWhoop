import React, { useState, useEffect } from "react";

import PlayerItem from "./PlayerItem";

import { Container, makeStyles, Typography, Grid } from "@material-ui/core";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  headingText: {
    fontSize: "3.5rem",
    fontFamily: "Anton, sans-serif",
    marginBottom: 0,
  },
  contentWrap: {
    marginBottom: "120px",
  },
}));

function PlayersPage() {
  const [players, setPlayers] = useState();
  const [status, setStatus] = useState("");

  const firebase = useFirebase();
  const currentUser = firebase.currentUser;
  const user = firebase.userLoginWatch;

  console.log(currentUser());

  useEffect(() => {
    user(setStatus);
  }, [status, user]);

  useEffect(() => {
    if (status) {
      firebase.list("PSA", setPlayers);
    }
  }, [firebase, status]);

  const classes = useStyles();
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
              Make It <span className="standOutText">Players</span>
            </Typography>
            <div className={classes.root}>
              {!status && (
                <h3>Please Login Or Create An Account To See The Whoopers.</h3>
              )}
              {status && (
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  // alignItems="center"
                >
                  {!players && <h3>Getting The Ballers!</h3>}
                  {players &&
                    players.map((player) => (
                      <PlayerItem player={player} key={player.id} />
                    ))}
                </Grid>
              )}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default PlayersPage;
