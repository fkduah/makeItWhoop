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
              Hoopers <span className="standOutText">Loop</span>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              className={classes.leadSentence}
            >
              Building bridges and helping student-athletes connect the dots
              towards their post-secondary goals.
            </Typography>

            <p style={{ textAlign: "left" }}>
              Hoopers Loop aims to empower, equip & enable young female Hoopers
              as they define their individual path, find their passion,
              establish their rhythm & set a consistent, achievable, beat
              towards success. On their journey of self-discovery, they will
              embrace who they are & explore the endless possibilities that
              await them! Through a dedicated emphasis on connectivity &
              celebrating individuality, Hoopers Loop creates a safe space,
              where dreams are realized.
            </p>
            <p style={{ textAlign: "left" }}>
              It’s a simple three step approach! Here’s how we will keep you in
              the Loop!
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Define - PSA Development!
            </p>
            <p style={{ textAlign: "left" }}>
              Preparation is Key! With a targeted focus on the development of
              the PSA, Hoopers Loop’s approach will ensure every PSA can
              recognize, play & build to their personalized strengths.
              Versatility, resilience, signature skill set, and basketball
              decision making/IQ are some of the key areas of focus within the
              Hoopers Loop development curriculum. In addition, through exposure
              based events and visits, individualized evaluations & development
              plans, Hoopers will be able to define their skill set and ensure
              they are best positioned for recruitment success. We will meet
              every Hooper where they are & assist them in their journey.
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Showcase - Connection and Exposure!
            </p>
            <p style={{ textAlign: "left" }}>
              Exposure is key & time is of the essence! With a single click of a
              button via our recruitment portal, national scouts will have a
              private gateway to verified Hoopers that have proven deserving of
              post-secondary recruitment. Through the Hoopers Loop way, we will
              ensure post-secondary scouts can have immediate, 24/7 visibility
              to the top talent nationally in Canada in a safe, transparent &
              cost effective way. Our aim is to facilitate ease & support
              meaningful, unique connections between scouts and Hoopers, thereby
              opening the dialogue & setting the path for quick, recruitment
              cycles.
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Achieve - Execute, Sustain, Elevate!
            </p>
          </div>
          <p style={{ textAlign: "left" }}>
            Every Hoopers’ dream is unique. Through a customized development &
            growth oriented action plan from targeted skill development,
            increased visibility, and exposure, we will work with Hoopers,
            Scouts, and their supporting cast to build a plan and provide
            customized support along the way to complete their Loop.
          </p>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Hoopers Loop Verification
          </p>
          <p>
            To ensure efficient usage of Hoopers Loop online development &
            recruitment portal, we diligently sought out student-athletes who
            have proven their potential for post-secondary play. All high school
            prospects are open to create a profile but not all will be released
            into the Hoopers Loop Portal. Each prospect looking to join the Loop
            for recruitment will need to have been evaluated by Hoopers Loop
            trusted scouts.
          </p>
          <p>
            PSA’s have various options and opportunities for an evaluation. If
            the prospect is not deemed verified, we will assist the athlete in
            working towards their goals beyond Hoopers Loop. Our services cater
            to young women who are passionate about the sport and aspire to play
            basketball at the next level. We understand that each individual has
            their own unique journey to explore; we are simply working to help
            you make the right connections to facilitate a healthy journey.
          </p>
          <p>
            <span className={"standOutText"}>
              Hoopers: Elaborate on what they get
            </span>
          </p>
          <p>
            Our goal is to help you and your supporting cast with the tools and
            resources needed to navigate the endless opportunities the game of
            basketball has to offer.
          </p>
          <p>
            Hoopers, this is your opportunity to showcase yourself. The
            investments you’ve made throughout your career thus far will
            continue to honor you. Here at Hoopers Loop we recognize sacrifice
            and passion, by joining the Loop you will be able to voice your game
            as it speaks to you.
          </p>
          <p>
            Exhaust this platform to highlight who you are as a
            person/prospective student-athlete. Help Nationwide scouts learn
            more about who’s behind the Hooper & why you are deserving of
            playing at the next level.
          </p>
          <p>
            <span className={"standOutText"}>
              Scouts: Elaborate on what they get
            </span>
          </p>
          <p>
            We understand the dynamics of your role as a scout/coach and the
            commitments required to effectively recruit. Balancing it all can be
            challenging, here at Hoopers Loop, we dedicate ourselves to hosting
            the top talents appropriate for your program.
          </p>
          <p>
            We will keep you in the Loop by updating you in real time via our
            platform of all relevant recruitment activities. You will have the
            opportunity to use this platform as a reference to learn more about
            all verified Hoopers.
          </p>
          <p>
            Saving you time in a cost effective manner will help you do your job
            best. Let us assist you in building the bridges needed to increase
            productivity and completing recruitment cycles.{" "}
          </p>
        </Container>
      </div>
    </>
  );
}

export default HoopersPage;
