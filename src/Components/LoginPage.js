import React, { useState } from "react";

import {
  Container,
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

import { useFirebase } from "../Components/Firebase/FirebaseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  headingText: {
    fontSize: "3.5rem",
    fontFamily: "Anton, sans-serif",
    marginBottom: 0
  },
  contentWrap: {
    marginBottom: "120px"
  }
}));

function LoginPage() {
  const firebase = useFirebase();

  const login = firebase.userLoginWatch;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, setUser);
    // props.history.push("/profile");
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
              Make It <span className="standOutText">Login</span>
            </Typography>

            <form style={{ marginTop: `50px` }} onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                align="center"
                className={classes.leadSentence}
              >
                {user && (
                  <span
                    className="standOutText"
                    style={{ textAlign: "center" }}
                  >
                    <Alert severity="error" style={{ textAlign: "center" }}>
                      {user}
                    </Alert>
                  </span>
                )}
              </Typography>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  style={{ marginBotttom: "60px" }}
                  id="email"
                  type="email"
                  label="Email Adress"
                  placeholder=""
                  required
                  variant="filled"
                  error={email ? true : false}
                  value={email}
                  helperText={email ? "" : "required"}
                  margin="normal"
                  name={email}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  style={{ marginBotttom: "60px" }}
                  id="password"
                  type="password"
                  label="Password"
                  placeholder=""
                  required
                  variant="filled"
                  error={password ? true : false}
                  value={password}
                  helperText={password ? "" : "required"}
                  margin="normal"
                  name={password}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  value="Submit"
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default LoginPage;
