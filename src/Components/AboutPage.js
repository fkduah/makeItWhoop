import React from "react";

import headerImage from "../../src/about-Us.png";

import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  topImage: {
    width: "100%",
    left: 0
  },
  headingText: {
    fontSize: "3.5rem",
    fontFamily: "Anton, sans-serif",
    marginBottom: 0
  },
  contentWrap: {
    marginBottom: "120px"
  },
  leadSentence: {
    marginTop: 70,
    fontWeight: 500,
    marginBottom: 0,
    fontSize: "1.5rem",
    lineHeight: "1.8rem"
  }
}));

function AboutPage() {
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
              About <span className="standOutText">Us</span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              className={classes.leadSentence}
            >
              I've Been There &amp; Understand
              <br />
              Your <span className="standOutText">Story</span>
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
    </>
  );
}

export default AboutPage;
