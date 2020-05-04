import React from "react";

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

function AboutPage() {
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
              Hoopers <span className="standOutText">Loop</span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              className={classes.leadSentence}
            >
              Customized one stop solutions with the{" "}
              <span className="standOutText">Hooper </span>in mind!
            </Typography>

            <p style={{ textAlign: "left" }}>
              Hoopers Loop is a one stop shop, aimed at equipping & enabling
              every WHOoper as they make efforts to realize their athletic
              potential, achieve their post -secondary academic goals & define
              WHO they truly are along the way.
            </p>
            <p style={{ textAlign: "left" }}>
              Leveraging their passion for basketball, student athletes gain the
              necessary tools & resources, support & defined, actionable plans
              to make it happen. The Hoopers Loop way allows members to Define,
              Showcase & Achieve their goals
            </p>
            <p style={{ textAlign: "left" }}>
              Be it through an innovative, time bound & cost effective player
              recruitment hub, through customized player development plans,
              showcase events, and everything in between, at Hoopers Loop, we
              meet every player where they are, understand their individual
              needs & develop a plan to elevate & transition every student
              athlete to where they dream of being.. in their own unique way.
            </p>
            <p style={{ textAlign: "left" }}>
              With a centralized focus to the student athlete, Hoopers Loop
              makes the process seamless, effortless, & customer centric at
              every step. Beit a parent looking for a streamlined process to
              support their child to achieve their academic & athletic goals,
              the Scout looking to build their dream team, a coach looking to
              showcase their top talent & or an aspiring WHOoper looking for an
              open door to shine, we’ve got the solutions in a centralized way.
              We provide collaborative tools, enabling pathways for meaningful,
              results oriented connections with a click of a button. Make it
              WHOop’s objective is to make the recruitment process favorable for
              all members through ease of access, reach, and information.
            </p>
          </div>
          <Typography
            variant="h6"
            align="left"
            className={classes.leadSentence}
            style={{ marginTop: 25 }}
          >
            ABOUT PROGRAM DIRECTOR-WUMI
            <span className="standOutText"> AGUNBIADE </span>
          </Typography>
          <p style={{ textAlign: "left" }}>
            With over 15 years of direct & indirect experience in the game of
            basketball, both as a player & coach at professional levels, Wumi
            Agunbiade is a notable & respected name in the North American
            basketball arena. Starting at the tender age of 6 years old Wumi
            realized her passion for the sport she lived & breathed, yet often
            found barriers as she attempted to navigate requirements to get to
            her dreams. Luckily for Wumi, through mentorship along the way,
            relentless parents, & her personal commitment to “putting in the
            work” -She is a decorated athlete of her time. She played three
            years professionally, was awarded new-comer of the year, and played
            in the highest leagues. As a NCAA Division 1 student-athlete she was
            recognized as the Rookie of the Year, second all-time leading
            scorer, and four-time all-conference selection while on honor roll.
          </p>
          <p>
            It is through Wumi’s personal experience, that she celebrates the
            many gains young athletes can realize through the game of
            basketball, with emphasis on education; having earned a
            post-secondary, & graduate degree (MBA) from the University of
            Pittsburgh, fueled & funded by the game of basketball; alongside
            invaluable life altering experiences with Global access across the
            world.
          </p>
          <p>
            Recognizing what she personally gained from the game she truly
            loves, Wumi’s objective in the creation of Hoopers Loop, centers
            around a desire to equip, enable & empower young athletes as they
            pursue their dreams. In Wumi’s definition, Hoopers Loop provides
            “access, information & support” - core ingredients to support the
            young athlete, parents in their navigation of the basketball
            recruitment process. Further, Hoopers Loop ensures a dual
            accountability model to success. There is a part for everyone to
            play in getting to the collective end goal. In Wumi’s vision, with
            collaboration, ownership & the right tools, it’s achievable.
          </p>
          <p>Wumi says it best in this quote: </p>
          <p>
            “My mission is to help young Canadian women define WHO they are
            using the game of basketball as a vehicle. I know what this game has
            done for me and my family and I know what it can do for that one
            little girl who sees the game as her greatest past-time. My goal is
            to see our youth achieve their dreams in ways I never knew existed
            when I was their age.”{" "}
          </p>
        </Container>
      </div>
    </>
  );
}

export default AboutPage;
