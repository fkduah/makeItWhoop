import React from "react";

import "./../App.css";
import headerImage from "../../src/MakeItWhoop-Illustration.svg";

import { Container, Grid, Button } from "@material-ui/core/";

function HomePage() {
  return (
    <Container maxWidth="false">
      <Container fixed>
        <Grid container className="pageTitleIntro homePage">
          <Grid item xs={12} sm={6} className="headerIntro">
            <h1 className="animated fadeInLeftBig fadeIn pageTitle">
              Welcome To
              <br />
              Make It Whoop
            </h1>
            <h4 className="headerDesc animated fadeInUpBig delay-2s">
              Your <span className="highlighted">one-stop-shop</span> for
              Canadian Girl’s Basketball players seeking to excel in life
              through sport.
            </h4>
            <h4 className="headerDesc">
              Connecting <span className="highlighted">Players</span> and{" "}
              <span className="highlighted">Recruitors</span>.{" "}
            </h4>
            <Button variant="contained" color="secondary" size="large">
              Register Today
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className="animated fadeInRightBig headerImageIntro"
          >
            <img
              src={headerImage}
              alt={"make It whoop Intro"}
              maxWidth={"100px"}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default HomePage;
