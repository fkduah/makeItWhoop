import React from "react";

import { Container, makeStyles, Typography } from "@material-ui/core";
// import { useFirebase } from "./Firebase/FirebaseContext";

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

function PlayerRegistrationPage() {
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
              <span className="standOutText">Player Registration</span>
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

export default PlayerRegistrationPage;
