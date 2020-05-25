import React from "react";
import { Link } from "react-router-dom";

import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topImage: {
    width: "100%",
    left: 0,
  },
  headingText: {
    fontSize: "3.5rem",
    fontFamily: "Anton, sans-serif",
    marginBottom: 0,
  },
  contentWrap: {
    marginBottom: "120px",
  },
  leadSentence: {
    marginTop: 70,
    fontWeight: 500,
    marginBottom: 0,
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
  },
}));

function ScoutsPage() {
  const classes = useStyles();
  return (
    <>
      <div width={100} className="">
        <Container fixed className="sectionTwoFixedWrapper">
          <div className={classes.contentWrap}>
            <Typography
              variant="h3"
              align="left"
              className={classes.headingText}
              style={{ marginTop: 50 }}
            >
              <span className={"standOutText"}>Scouts</span>
            </Typography>

            <p style={{ textAlign: "left" }}>
              We understand the dynamics of your role as a scout/coach and the
              commitments required to effectively recruit. Balancing it all can
              be challenging, here at Hoopers Loop, we dedicate ourselves to
              hosting the top talents appropriate for your program. We will keep
              you in the Loop by updating you in real time via our platform of
              all relevant recruitment activities. You will have the opportunity
              to use this platform as a reference to learn more about all
              verified Hoopers.
            </p>
            <p style={{ textAlign: "left" }}>
              Saving you time in a cost effective manner will help you do your
              job best. Let us assist you in building the bridges needed to
              increase productivity and completing recruitment cycles.
            </p>

            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Here’s how you can join the Loop:
            </p>
            <ol>
              <li>
                <Link
                  to="/registration"
                  style={{ color: "red", fontWeight: 500 }}
                >
                  Subscribe
                </Link>{" "}
                to have access to Canada’s top talent
              </li>
              <li>Follow athletes of choice and interest</li>
              <li>
                Use ease of recruitment features to stay in the Loop of recent
                updates and newly verified PSA’s
              </li>
            </ol>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ScoutsPage;
