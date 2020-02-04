import React from "react";

import { Container, Box, makeStyles, Typography } from "@material-ui/core";

import headerImage from "../../src/ContactUs.png";

import Card from "./CardSelect";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  thirdwrapper: {
    marginBottom: 100
  },
  topImage: {
    width: "100%",
    left: 0
  },
  contentWrap: {
    marginBottom: 100
  }
}));

function RegistrationPage() {
  const classes = useStyles();

  return (
    <>
      <Container
        maxWidth={false}
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <div className="animated fadeInDownBig">
          <img src={headerImage} className={classes.topImage} alt="About Us" />
        </div>
      </Container>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lorem quam, adipiscing condimentum tristique vel, eleifend sed
              turpis. Pellentesque cursus arcu id magna euismod in elementum
              purus molestie sed. Curabitur pellentesque massa eu nulla et
              consequat porttitor arcu porttitor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer lorem quam, adipiscing
              condimentum tristique vel, eleifend sed turpis. Morbi ut arcu
              dolor. Maecenas id nulla nec nibh viverra magna eu lacinia
              ullamcorper, augue est.
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
                  <Card
                    buttonName="Sign Up"
                    modalDescript="The Description"
                    modalTitle="Player Sign Up"
                    title="Players"
                    content="Would you like to play basketball after high school? We created this platform for you! Share your basketball information, statistics, highlights, academics and more with university and college coaches across North America today!"
                    imageTitle="Basketball Players"
                  />
                </Box>
                <Box className="">
                  <Card
                    buttonName="Sign Up"
                    modalDescript="The Description"
                    modalTitle="Recruiter Sign Up"
                    title="Recruiters"
                    content="Canadian girls basketball is the best it’s ever been, and this is how you can keep up with your busy schedule! View player profiles and recruitment information, and scroll through their timeline for recent news and accomplishments here!"
                    imageTitle="Recruiter Images"
                  />
                </Box>
                <Box className="">
                  <Card
                    modalTitle="High School Coaches Sign Up"
                    modalDescript="The Description"
                    buttonName="Sign Up"
                    title="High School Coaches"
                    content="Make it Whoop is here to help your program succeed and your players reach their potential. We offer a variety of seminar and coaching options to help you fill the gaps."
                    imageTitle="High School Coaches"
                  />
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
