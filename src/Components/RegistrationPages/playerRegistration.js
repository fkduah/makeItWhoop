import React, { useState } from "react";

import {
  TextField,
  Container,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

import { useFirebase } from "../Firebase/FirebaseContext";

import Iframe from "react-iframe";

export default function PlayerForm(props) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [position, setPosition] = useState("");
  const [guardianfname, setGuardianFname] = useState("");
  const [guardianlname, setGuardianLname] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mailing, setMailing] = useState("");
  const [gphone, setGphone] = useState("");
  const [gemail, setGemail] = useState("");
  const [gmailing, setGmailing] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [password, setPassword] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [winter, setWinter] = useState("");
  const [wleague, setWLeague] = useState("");
  const [winstagram, setWinstagram] = useState("");
  const [wtwitter, setWtwitter] = useState("");
  const [wcoachphone, setWcoachphone] = useState("");
  const [wcoach, setWcoach] = useState("");
  const [wcoachemail, setWcoachemail] = useState("");
  const [wjersy, setWjersy] = useState("");
  const [summer, setSummer] = useState("");
  const [sleague, setSleague] = useState("");
  const [sinstagram, setSinstagram] = useState("");
  const [stwitter, setStwitter] = useState("");
  const [scoachphone, setScoachphone] = useState("");
  const [scoach, setScoach] = useState("");
  const [scoachemail, setScoachemail] = useState("");
  const [sjersy, setSjersy] = useState("");
  const [image, setImage] = useState("");
  const [youtube, setYoutube] = useState("");
  const [sat, setSAT] = useState("");
  const [act, setACT] = useState("");
  const [gpa, setGPA] = useState("");
  const [style, setStyle] = useState("");
  const [favorite, setFavorite] = useState("");
  const [develop, setDevelop] = useState("");
  const [commitment, setCommitment] = useState("");
  const [interest, setInterest] = useState("");
  const [field, setField] = useState("");

  const firebase = useFirebase();

  const register = firebase.authUser;

  const registrationFields = {
    firstName,
    lastName,
    DOB: dob,
    gradYear,
    position,
    tiktok,
    mailing,
    guardianfname,
    guardianlname,
    gphone,
    gemail,
    gmailing,
    relationship,
    contactPhone: phone,
    contactEmail: email,
    instagram,
    twitter,
    winterTeam: winter,
    winterLeauge: wleague,
    winterTeamInstagram: winstagram,
    winterTeamTwitter: wtwitter,
    winterTeamCoach: wcoachphone,
    winterTeamCoachName: wcoach,
    winterCoachEmail: wcoachemail,
    winterTeamJersey: wjersy,
    summerTeam: summer,
    summerTeamsLeauge: sleague,
    summerTeamInstagram: sinstagram,
    summerTeamTwitter: stwitter,
    summerTeamsCoachPhone: scoachphone,
    summerTeamCoachName: scoach,
    summerTeamsCoachEmail: scoachemail,
    summerTeamJerseyNum: sjersy,
    profilePicURL: image,
    youtubeLink: youtube,
    favorite,
    develop,
    commitment,
    interest,
    field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, "PSA", registrationFields);
    props.history.push("/");
  };

  return (
    <Container maxWidth={false}>
      <Container fixed style={{ marginBottom: "200px", textAlign: "left" }}>
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "left" }}>INFORMATION</h3>
          <br />
          <TextField
            id="password"
            label="Account Password"
            type="password"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            required
            error={password.length > 5 ? false : true}
            value={password}
            helperText={password.length > 5 ? "" : "min 6 characters"}
            margin="normal"
            name={password}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <TextField
            id="firstname"
            label="First Name"
            variant="filled"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={firstName ? true : false}
            value={firstName}
            helperText={firstName ? "" : "required"}
            margin="normal"
            name={firstName}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            id="lastname"
            label="Last Name"
            variant="filled"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={lastName ? true : false}
            value={lastName}
            helperText={lastName ? "" : "required"}
            margin="normal"
            name={lastName}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <TextField
            id="dob"
            variant="filled"
            label="Date Of Birth"
            style={{ margin: 8 }}
            placeholder=""
            type="date"
            required
            error={dob ? true : false}
            value={dob}
            helperText={dob ? "" : "required"}
            margin="normal"
            name={dob}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setDob(e.target.value)}
          />

          <FormControl variant="filled">
            <InputLabel id="gradYear">Graduating Year</InputLabel>
            <Select
              style={{ margin: 8, paddingRight: "40px" }}
              labelId="Position"
              id="gradYear"
              value={gradYear}
              onChange={(e) => setGradYear(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2025}>2025</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled">
            <InputLabel id="position">Position</InputLabel>
            <Select
              style={{ margin: 8, paddingRight: "40px" }}
              labelId="position"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"PG"}>PG</MenuItem>
              <MenuItem value={"G"}>G</MenuItem>
              <MenuItem value={"G/F"}>G/F</MenuItem>
              <MenuItem value={"F"}>F</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            id="phone"
            label="Phone Number"
            style={{ margin: 8 }}
            placeholder=""
            required
            variant="filled"
            error={phone ? true : false}
            value={phone}
            helperText={phone ? "" : "required"}
            margin="normal"
            name={phone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            id="email"
            type="email"
            label="Email Adress"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            required
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
          <br />
          <TextField
            id="mailing"
            label="Mailing Address "
            style={{ margin: 8 }}
            placeholder=""
            error={mailing ? true : false}
            value={mailing}
            helperText={mailing ? "" : "required"}
            margin="normal"
            multiline
            rows="4"
            variant="filled"
            name={mailing}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setMailing(e.target.value)}
          />
          <h3 style={{ textAlign: "LEFT" }}>SOCIAL MEDIA</h3>
          <br />
          <TextField
            id="instagram"
            label="Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={instagram ? true : false}
            value={instagram}
            helperText={instagram ? "" : "required"}
            margin="normal"
            variant="filled"
            name={instagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <TextField
            id="twitter"
            label="Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={twitter ? true : false}
            value={twitter}
            helperText={twitter ? "" : "required"}
            margin="normal"
            variant="filled"
            name={twitter}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <TextField
            id="tiktok"
            label="Tik Tok "
            style={{ margin: 8 }}
            placeholder=""
            error={tiktok ? true : false}
            value={tiktok}
            helperText={tiktok ? "" : "required"}
            margin="normal"
            variant="filled"
            name={tiktok}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setTiktok(e.target.value)}
          />

          <h3 style={{ textAlign: "left" }}>GUARDIAN CONTACT</h3>
          <br />
          <TextField
            id="guardian"
            variant="filled"
            label="Guardians First Name"
            style={{ margin: 8 }}
            placeholder=""
            error={guardianfname ? true : false}
            value={guardianfname}
            margin="normal"
            name={guardianfname}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGuardianFname(e.target.value)}
          />
          <TextField
            id="guardianlname"
            variant="filled"
            label="Guardians Last Name"
            style={{ margin: 8 }}
            placeholder=""
            error={guardianlname ? true : false}
            value={guardianlname}
            margin="normal"
            name={guardianlname}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGuardianLname(e.target.value)}
          />
          <TextField
            id="relationship"
            label="Relationship"
            style={{ margin: 8 }}
            placeholder=""
            value={relationship}
            variant="filled"
            error={relationship ? true : false}
            margin="normal"
            name={relationship}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setRelationship(e.target.value)}
          />

          <br />
          <TextField
            id="gphone"
            label="Gaurdian's Phone Number"
            style={{ margin: 8 }}
            placeholder=""
            required
            variant="filled"
            error={gphone ? true : false}
            value={gphone}
            helperText={gphone ? "" : "required"}
            margin="normal"
            name={gphone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGphone(e.target.value)}
          />
          <TextField
            id="gemail"
            type="email"
            label="Gaurdians Email Adress"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            error={gemail ? true : false}
            value={gemail}
            helperText={gemail ? "" : "required"}
            margin="normal"
            name={gemail}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGemail(e.target.value)}
          />
          <TextField
            id="gmailing"
            label="Gaurdian Mailing Address "
            style={{ margin: 8 }}
            placeholder=""
            error={gmailing ? true : false}
            value={gmailing}
            helperText={gmailing ? "" : "required"}
            margin="normal"
            multiline
            rows="4"
            variant="filled"
            name={gmailing}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGmailing(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>ACADEMICS</h3>
          <br />
          <TextField
            id="sat"
            label="SAT Score"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            error={sat ? true : false}
            value={sat}
            helperText={sat ? "" : "required"}
            margin="normal"
            name={sat}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setSAT(e.target.value)}
          />
          <TextField
            id="act"
            label="ACT Score"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            error={act ? true : false}
            value={act}
            helperText={act ? "" : "required"}
            margin="normal"
            name={act}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setACT(e.target.value)}
          />
          <TextField
            id="gpa"
            label="GPA"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            error={gpa ? true : false}
            value={gpa}
            helperText={gpa ? "" : "required"}
            margin="normal"
            name={gpa}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setGPA(e.target.value)}
          />
          <TextField
            id="field"
            label="Post-Secondary Field of Study Interest"
            style={{ margin: 8 }}
            placeholder=""
            variant="filled"
            error={field ? true : false}
            value={field}
            helperText={field ? "" : "required"}
            margin="normal"
            name={field}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setField(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>ATHLETICS</h3>
          <TextField
            id="style"
            label="Preferred Style of Play"
            style={{ margin: 8 }}
            placeholder=""
            value={style}
            variant="filled"
            error={style ? true : false}
            margin="normal"
            name={style}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setStyle(e.target.value)}
          />
          <TextField
            id="favorite"
            label="Favorite aspect of your game?"
            style={{ margin: 8 }}
            placeholder=""
            value={favorite}
            variant="filled"
            error={favorite ? true : false}
            margin="normal"
            name={favorite}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setFavorite(e.target.value)}
          />
          <TextField
            id="develop"
            label="Area in your game you’d like to develop?"
            style={{ margin: 8 }}
            placeholder=""
            value={develop}
            variant="filled"
            error={develop ? true : false}
            margin="normal"
            name={develop}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setDevelop(e.target.value)}
          />
          <TextField
            id="interest"
            label="INSTITUTIONS THAT HAVE SHOWN INTEREST"
            style={{ margin: 8 }}
            placeholder=""
            value={interest}
            variant="filled"
            error={interest ? true : false}
            margin="normal"
            name={interest}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setInterest(e.target.value)}
          />
          <TextField
            id="commitment"
            label="Commitment"
            style={{ margin: 8 }}
            placeholder=""
            value={commitment}
            variant="filled"
            error={commitment ? true : false}
            margin="normal"
            name={commitment}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setCommitment(e.target.value)}
          />
          <br />

          <h3 style={{ textAlign: "LEFT" }}>WINTER TEAM</h3>
          <TextField
            id="winter"
            label="Winter Team Name "
            style={{ margin: 8 }}
            placeholder=""
            error={winter ? true : false}
            value={winter}
            margin="normal"
            name={winter}
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWinter(e.target.value)}
          />
          <TextField
            id="wleague"
            label="Winter Team's League "
            style={{ margin: 8 }}
            placeholder=""
            error={wleague ? true : false}
            value={wleague}
            variant="filled"
            margin="normal"
            name={wleague}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWLeague(e.target.value)}
          />

          <TextField
            id="winstagram"
            label="Team's Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={winstagram ? true : false}
            value={winstagram}
            margin="normal"
            variant="filled"
            name={winstagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWinstagram(e.target.value)}
          />
          <TextField
            id="wtwitter"
            label="Team's Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={wtwitter ? true : false}
            value={wtwitter}
            margin="normal"
            name={wtwitter}
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWtwitter(e.target.value)}
          />
          <TextField
            id="wcoach"
            label="Coach's Name"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoach ? true : false}
            value={wcoach}
            margin="normal"
            variant="filled"
            name={wcoach}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWcoach(e.target.value)}
          />
          <TextField
            id="wcoachphone"
            type="number"
            label="Coach's Number"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoachphone ? true : false}
            value={wcoachphone}
            margin="normal"
            name={wcoachphone}
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWcoachphone(e.target.value)}
          />
          <TextField
            id="wcoachemail"
            type="email"
            label="Coach's Email"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoachemail ? true : false}
            value={wcoachemail}
            margin="normal"
            variant="filled"
            name={wcoachemail}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWcoachemail(e.target.value)}
          />
          <TextField
            id="wjersy"
            type="number"
            max="99"
            min="1"
            label="Jersey Number"
            style={{ margin: 8 }}
            placeholder=""
            error={wjersy ? true : false}
            value={wjersy}
            variant="filled"
            margin="normal"
            name={wjersy}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setWjersy(e.target.value)}
          />
          <h3 style={{ textAlign: "LEFT" }}>SUMMER TEAM</h3>
          <TextField
            id="summer"
            label="Summer Team Name "
            style={{ margin: 8 }}
            placeholder=""
            error={summer ? true : false}
            value={summer}
            variant="filled"
            margin="normal"
            name={summer}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setSummer(e.target.value)}
          />
          <TextField
            id="sleague"
            label="Summer Team's League "
            style={{ margin: 8 }}
            placeholder=""
            error={sleague ? true : false}
            value={sleague}
            margin="normal"
            variant="filled"
            name={sleague}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setSleague(e.target.value)}
          />

          <TextField
            id="sinstagram"
            label="Team's Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={sinstagram ? true : false}
            value={sinstagram}
            margin="normal"
            variant="filled"
            name={sinstagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setSinstagram(e.target.value)}
          />
          <TextField
            id="stwitter"
            label="Team's Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={stwitter ? true : false}
            value={stwitter}
            margin="normal"
            name={stwitter}
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setStwitter(e.target.value)}
          />
          <TextField
            id="scoach"
            label="Coach's Name"
            style={{ margin: 8 }}
            placeholder=""
            error={scoach ? true : false}
            value={scoach}
            margin="normal"
            variant="filled"
            name={scoach}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setScoach(e.target.value)}
          />
          <TextField
            id="scoachphone"
            type="number"
            label="Coach's Number"
            style={{ margin: 8 }}
            placeholder=""
            error={scoachphone ? true : false}
            value={scoachphone}
            margin="normal"
            variant="filled"
            name={scoachphone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setScoachphone(e.target.value)}
          />
          <TextField
            id="scoachemail"
            type="email"
            label="Coach's Email"
            style={{ margin: 8 }}
            placeholder=""
            error={scoachemail ? true : false}
            value={scoachemail}
            margin="normal"
            variant="filled"
            name={scoachemail}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setScoachemail(e.target.value)}
          />
          <TextField
            id="sjersy"
            type="number"
            max="99"
            min="1"
            label="Jersey Number"
            style={{ margin: 8 }}
            placeholder=""
            error={sjersy ? true : false}
            value={sjersy}
            variant="filled"
            margin="normal"
            name={sjersy}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setSjersy(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>MEDIA</h3>
          <TextField
            id="image"
            type="url"
            label="Profile Image URL"
            style={{ margin: 8 }}
            placeholder=""
            error={image ? true : false}
            value={image}
            variant="filled"
            margin="normal"
            name={image}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setImage(e.target.value)}
          />

          <br />
          {image && (
            <div>
              <img src={image} alt="profile" height="300" />
              <br />
            </div>
          )}
          <TextField
            id="youtube"
            type="url"
            variant="filled"
            label="Youtube Video ID"
            style={{ margin: 8 }}
            placeholder=""
            error={youtube ? true : false}
            value={youtube}
            margin="normal"
            name={youtube}
            InputLabelProps={{
              shrink: true
            }}
            onChange={(e) => setYoutube(e.target.value)}
          />
          <br />
          {youtube && (
            <div>
              <Iframe
                url={`http://www.youtube.com/embed/${youtube}`}
                width="426px"
                height="250px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
              <br />
              <br />
            </div>
          )}
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Container>
  );
}
