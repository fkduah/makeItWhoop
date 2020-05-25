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

function VerificationPage() {
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
              <span className={"standOutText"}>Verification</span>
            </Typography>

            <p style={{ textAlign: "left" }}>
              To ensure efficient usage of Hoopers Loop online development &
              recruitment portal, we diligently sought out female prospective
              student-athletes. All prospects are able to create a profile but
              not all will be verified. A verified student-athlete has been
              evaluated and rated by Hoopers Loop.
            </p>
            <p style={{ textAlign: "left" }}>
              Saving you time in a cost effective manner will help you do your
              job best. Let us assist you in building the bridges needed to
              increase productivity and completing recruitment cycles.
            </p>
            <p>
              PSA’s have various options and opportunities for an evaluation
              that also revolve around their athletic development. Our services
              cater to young women who are passionate about the sport and aspire
              to play basketball at the next level. We understand that each
              individual has their own unique journey to explore and conquer.
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Evaluations
            </p>
            <p>
              Prospective student-athletes are evaluated based on their
              positional skill level, work ethic which contribute to their
              potential, and intangibles. We have more than 15 years of high
              level collegiate and professional experience. We are neutral and
              uninfluenced in our evaluations therefore PSA’s get an honest
              report that reflects their game.
            </p>
            <p>
              Click{" "}
              <Link to="/services" style={{ color: "red", fontWeight: 500 }}>
                here
              </Link>{" "}
              to learn more about how we can evaluate your game
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Ratings
            </p>
            <p>
              On a scale ranging from 5-1 in increments of 0.5, we rate PSA to
              improve the usage of the platform.
            </p>
            <p>
              It's simple,
              <ol reversed>
                <li>High Major (HM)</li>
                <li> High Mid Major to Mid Major (HMM)</li>
                <li>Mid Major/USPORTS (MM)</li>
                <li>Low Major/USPORTS (LM)</li>
                <li>Community/OCAA (C)</li>
              </ol>
              <i>
                Ratings are subject to change depending on the PSA’s
                performance.
              </i>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default VerificationPage;
