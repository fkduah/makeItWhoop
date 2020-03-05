import React from "react";

import { Container, makeStyles, Typography } from "@material-ui/core";

import PlayerForm from "./RegistrationPages/playerRegistration";
import RecruiterForm from "./RegistrationPages/RecruiterForm";
import CoachForm from "./RegistrationPages/CoachForm";

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

function FormWrapperPage(props) {
  const title = () => {
    const formName = props.match.url;
    if (formName === "/registration/player") {
      return "Player";
    }
    if (formName === "/registration/recruiter") {
      return "Recruiter";
    }
    if (formName === "/registration/coach") {
      return "Coaches";
    }
    return "Go Back To The ";
  };

  const formShow = () => {
    const form = props.match.url;
    if (form === "/registration/player") {
      return <PlayerForm history={props.history} />;
    } else if (form === "/registration/recruiter") {
      return <RecruiterForm history={props.history} />;
    } else if (form === "/registration/coach") {
      return <CoachForm history={props.history} />;
    } else {
      return "Visit The Registration Page";
    }
  };

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
              {title()} <span className="standOutText">Registration</span>
            </Typography>
          </div>
          {formShow()}
        </Container>
      </Container>
    </>
  );
}

export default FormWrapperPage;
