import React from "react";

import { Container, Box, makeStyles, Typography } from "@material-ui/core";

import Card from "./CardSelect";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  thirdwrapper: {
    marginBottom: 100,
  },
  topImage: {
    width: "100%",
    left: 0,
  },
  contentWrap: {
    marginBottom: 0,
  },
}));

function RegistrationPage() {
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
              <span className="standOutText">Register</span>
            </Typography>

            <p style={{ textAlign: "left" }}>
              Keep in the Loop with our 24/7 accessible, cost effective, and
              time bound recruitment portal!
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Hoopers
            </p>
            <p style={{ textAlign: "left" }}>
              Would you like toPlay basketball after high school? We created
              this platform for you! Share your basketball information,
              statistics, highlights, academics and more with university and
              college coaches across North America today!
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Scouts
            </p>
            <p style={{ textAlign: "left" }}>
              Candaian girls basketball is the best it’s ever been, and this is
              how you can keep up with your busy schedules! View player profiles
              and recruitment information, and scroll through their timeline for
              recent news and accomplishments here!
            </p>
          </div>
        </Container>
      </Container>

      <Container maxWidth="lg">
        <Container maxWidth={false} className="">
          <div className={classes.thirdwrapper}>
            <Box container="true" className="">
              <Box
                display="flex"
                justifyContent="space-around"
                alignContent="space-between"
                flexWrap="wrap"
                className="pageTitleIntro homePage"
              >
                <Box className="">
                  <Link to="registration/player">
                    <Card
                      buttonName="Register"
                      buttonURL="registration/player"
                      title="Players"
                      content="Would you like to play basketball after high school? We created this platform for you! Share your basketball information, statistics, highlights, academics and more with university and college coaches across North America today!"
                      imageTitle="Basketball Players"
                    />
                  </Link>
                </Box>
                <Box className="">
                  <Link to="registration/recruiter">
                    <Card
                      buttonName="Register"
                      buttonURL="registration/recruiter"
                      title="Recruiters"
                      content="Canadian girls basketball is the best it’s ever been, and this is how you can keep up with your busy schedule! View player profiles and recruitment information, and scroll through their timeline for recent news and accomplishments here!"
                      imageTitle="Recruiter Images"
                    />
                  </Link>
                </Box>
                <Box className="">
                  <Link to="registration/coach">
                    <Card
                      buttonName="Register"
                      buttonURL="registration/coach"
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
      </Container>
    </>
  );
}

export default RegistrationPage;
