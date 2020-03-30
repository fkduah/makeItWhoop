import React, { useState, useEffect } from "react";

import PlayerItem from "./PlayerItem";

import { Container, makeStyles, Typography, Grid } from "@material-ui/core";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  headingText: {
    fontSize: "3.5rem",
    fontFamily: "Anton, sans-serif",
    marginBottom: 0
  },
  contentWrap: {
    marginBottom: "120px"
  }
}));

function PlayersPage() {
  const [players, setPlayers] = useState();

  const firebase = useFirebase();
  console.log(players);

  useEffect(() => {
    firebase.list("PSA", setPlayers);
  }, []);

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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {players &&
                players.map((player) => <PlayerItem player={player} />)}
            </Grid>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default PlayersPage;
