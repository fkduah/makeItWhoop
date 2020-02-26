import React from "react";

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

function ContactPage() {
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
              Contact <span className="standOutText">Us</span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              className={classes.leadSentence}
            >
              <br />
              www.<span className="standOutText">makeitwhoop</span>@gmail.com
            </Typography>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default ContactPage;
