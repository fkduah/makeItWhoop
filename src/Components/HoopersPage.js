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

function HoopersPage() {
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
              <span className={"standOutText"}>Hoopers</span>
            </Typography>

            <p style={{ textAlign: "left" }}>
              Our goal is to help you and your supporting cast with the tools
              and resources needed to navigate the endless opportunities the
              game of basketball has to offer. Hoopers, this is your opportunity
              to showcase yourself. The investments you’ve made throughout your
              career thus far will continue to honor you. Here at Hoopers Loop
              we recognize sacrifice and passion, by joining the Loop you will
              be able to voice your game as it speaks to you.
            </p>
            <p style={{ textAlign: "left" }}>
              It’s a simple three step approach! Here’s how we will keep you in
              the Loop!
            </p>

            <p style={{ textAlign: "left" }}>
              Exhaust this platform to highlight who you are as a
              person/prospective student-athlete. Help Nationwide scouts learn
              more about who’s behind the Hooper & why you are deserving of
              playing at the next level.
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
                Create a{" "}
                <Link
                  to="/registration"
                  style={{ color: "red", fontWeight: 500 }}
                >
                  profile
                </Link>{" "}
                for the visibility of Post-Secondary Scouts
              </li>
              <li>Keep your profiles up to date</li>
              <li>Upload recruitment content to your Timeline</li>
            </ol>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HoopersPage;
