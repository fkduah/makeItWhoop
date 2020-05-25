import React from "react";

import { Container, makeStyles, Typography, Tooltip } from "@material-ui/core";

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
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 16,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} {...props} />;
}

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
              Building bridges and connecting the dots towards the{" "}
              <span className="standOutText">Hoopers</span> post-secondary
              goals.
            </Typography>

            <p style={{ textAlign: "left" }}>
              Hoopers Loop is a one stop shop that aims to empower, equip &
              enable young female Hoopers as they define their individual path,
              find their passion, establish their rhythm & set a consistent,
              achievable, beat towards success. On their journey of
              self-discovery, they will embrace who they are & explore the
              endless possibilities that await them! Through a dedicated
              emphasis on connectivity & celebrating individuality, Hoopers Loop
              creates a safe space, where dreams are realized.
            </p>
            <p>
              Leveraging their passion for basketball, student-athletes gain the
              necessary tools & resources, support & defined, actionable plans
              to achieve their goals. The Hoopers Loop way allows Hoopers to
              <BootstrapTooltip title="Hoopers Loop’s approach will ensure every PSA can recognize, play & build to their personalized strengths. Versatility, resilience, signature skill set, and basketball decision making/IQ are some of the key areas of Hoopers Loop’s focus.">
                <span
                  className={"standOutText"}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {" "}
                  Define
                </span>
              </BootstrapTooltip>
              ,{" "}
              <BootstrapTooltip title="We will ensure post-secondary scouts can have immediate, 24/7 visibility to the top talent nationally in Canada in a safe, transparent & cost effective way">
                <span
                  className={"standOutText"}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Showcase
                </span>
              </BootstrapTooltip>{" "}
              &{" "}
              <BootstrapTooltip title="Through a customized development & growth oriented action plan from targeted skill development, increased visibility, and exposure, we will work with Hoopers, Scouts, and their supporting cast to build a plan and provide customized support along the way to complete their Loop.">
                <span
                  className={"standOutText"}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Achieve
                </span>
              </BootstrapTooltip>{" "}
              their goals.
            </p>
            <p>
              Be it through an innovative, time bound & cost effective player
              recruitment hub, through customized player development plans,
              events, and everything in between, at Hoopers Loop, we meet every
              Hooper where they are, understand their individual needs & develop
              a plan to elevate & transition every student athlete to where they
              dream of being in their own unique way.
            </p>
            <p>
              With a centralized focus to the student athlete, Hoopers Loop
              makes the process seamless, effortless, & user centric at every
              step. Beit a parent looking for a streamlined process to support
              their child to achieve their academic & athletic goals, the Scout
              looking to build their dream team, a coach looking to showcase
              their top talent & or an aspiring Hooper looking for an open door
              to shine, we’ve got the solutions in a centralized way. We provide
              collaborative tools, enabling pathways for meaningful, results
              oriented connections with a click of a button. Hoopers Loop’s
              objective is to make the recruitment process favorable for all
              members through ease of access, reach, and information.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutPage;
