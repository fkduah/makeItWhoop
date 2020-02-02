import React from "react";
import { Link } from "react-router-dom";

import Card from "./CardSelect";

import "./../App.css";
import headerImage from "../../src/MakeItWhoop-Illustration.svg";
import player from "../../src/highschool-grid-03.jpg";
import recruiter from "../../src/coach-recruit.jpg";
import schoolCoach from "../../src/high-school-grid-01.jpg";

import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  thirdwrapper: {
    marginBottom: 50
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="false">
        <Container fixed className="pageHeader">
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
              <Link to="/registration">
                <Button variant="contained" color="secondary" size="large">
                  Register Today
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="animated fadeInRightBig headerImageIntro"
            >
              <object
                type="image/svg+xml"
                data={headerImage}
                make
                It
                whoop
                Intro
                style={{ maxHeight: "400px" }}
              >
                make It whoop Intro
              </object>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container maxWidth="false" className="sectionTwoFluidWrapper">
        <Container fixed className="sectionTwoFixedWrapper">
          <Typography variant="h3" align="center" className="sectionTwoContent">
            It's
            <br />
            More Than A <span className="standOutText">Game</span>
          </Typography>
          <p>
            As an athlete growing …” change to “Make it Whoop provides holistic
            guidance and mentorship from Canadian women who have lived their
            Whoop dreams, and want to equip you with the tools you need on and
            off the court.
          </p>
          <p>
            “Having the opportunity..” change to “The 4 Pillars: Versed in the
            Adverse, Preparation for Performance, Whoop Dreams, and I Got Next
            are designed for every female athlete wanting more out of
            basketball.
          </p>

          <Link to="/registration">
            <Button variant="contained" color="secondary" size="large">
              Register Today
            </Button>
          </Link>
        </Container>
      </Container>

      <Container maxWidth="false" className="sectionThreeFluidWrapper">
        <div className={classes.thirdwrapper}>
          <Box container className="sectionThreeFixedWrapper">
            <Box
              display="flex"
              justifyContent="space-around"
              alignContents="space-between"
              flexWrap="wrap"
              className="pageTitleIntro homePage"
            >
              <Box class="animated fadeInUp">
                <Link to="/registration">
                  <Card
                    image={player}
                    title="Players"
                    content="Would you like to play basketball after high school? We created this platform for you! Share your basketball information, statistics, highlights, academics and more with university and college coaches across North America today!"
                    imageTitle="Basketball Players"
                  />
                </Link>
              </Box>
              <Box class="animated fadeInUp">
                <Link to="/registration">
                  <Card
                    image={recruiter}
                    title="Recruiters"
                    content="Canadian girls basketball is the best it’s ever been, and this is how you can keep up with your busy schedule! View player profiles and recruitment information, and scroll through their timeline for recent news and accomplishments here!"
                    imageTitle="Recruiter Images"
                  />
                </Link>
              </Box>
              <Box class="animated fadeInUp">
                <Link to="/registration">
                  <Card
                    image={schoolCoach}
                    title="High School Coaches"
                    content="Make it Whoop is here to help your program succeed and your players reach their potential. We offer a variety of seminar and coaching options to help you fill the gaps."
                    imageTitle="High School Coaches"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
