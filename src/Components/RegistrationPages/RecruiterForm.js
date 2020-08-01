import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TextField, Container, Button } from "@material-ui/core";

import { useFirebase } from "../Firebase/FirebaseContext";

export default function RecruiterForm(props) {
  const [conference, setConference] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [institution, setInstitution] = useState("");
  const [level, setLevel] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const firebase = useFirebase();

  const register = firebase.authUser;
  const user = firebase.userLoginWatch;

  const registrationFields = {
    conference,
    email,
    country,
    institution,
    level,
    instagram,
    twitter,
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!email || !conference || !country || !institution || !level) {
      alert("Please fill out the necessary fields");
      return;
    }
    register(email, password, "Scout", registrationFields);
  };

  useEffect(() => {
    user(setStatus);
  }, [status, user]);

  return (
    <Container maxWidth={false} style={{ marginBottom: 200 }}>
      {status && (
        <div>
          <h3>
            Thanks For Joining Us. You Now Have Exclusive Access To Top Rated
            Players
          </h3>
          <br />
          <Link to="/players">
            <Button>View Players</Button>
          </Link>
        </div>
      )}

      {!status && (
        <form>
          <TextField
            id="Email"
            label="Email"
            style={{ margin: 20 }}
            placeholder=""
            type="email"
            required
            error={email ? false : true}
            value={email}
            helperText={email ? "" : "required"}
            margin="normal"
            name={email}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            style={{ margin: 20 }}
            placeholder=""
            type="password"
            required
            error={password ? false : true}
            value={password}
            helperText={password ? "" : "required"}
            margin="normal"
            name={password}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="Conference"
            label="Conference"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={conference ? false : true}
            value={conference}
            helperText={conference ? "" : "required"}
            margin="normal"
            name={conference}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setConference(e.target.value)}
          />

          <TextField
            id="Country"
            label="Country"
            style={{ margin: 8 }}
            placeholder=""
            type="text"
            required
            error={country ? false : true}
            value={country}
            helperText={country ? "" : "required"}
            margin="normal"
            name={country}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            id="institution"
            label="Institution"
            style={{ margin: 8 }}
            placeholder=""
            type="text"
            required
            error={institution ? false : true}
            value={institution}
            helperText={institution ? "" : "required"}
            margin="normal"
            name={institution}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setInstitution(e.target.value)}
          />
          <TextField
            id="level"
            label="Level"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={level ? false : true}
            value={level}
            margin="normal"
            name={level}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setLevel(e.target.value)}
          />
          <TextField
            id="twitter"
            label="Twitter"
            style={{ margin: 8 }}
            placeholder=""
            error={twitter ? false : true}
            value={twitter}
            margin="normal"
            name={twitter}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <TextField
            id="instagram"
            label="Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={instagram ? false : true}
            value={instagram}
            margin="normal"
            name={instagram}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            value="Submit"
            onClick={handleForm}
          >
            Register
          </Button>
        </form>
      )}
    </Container>
  );
}
