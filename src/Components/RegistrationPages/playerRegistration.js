import React, { useState } from "react";

import { TextField, Container, Button } from "@material-ui/core";

import { useFirebase } from "../Firebase/FirebaseContext";

export default function PlayerForm(props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [height, setHeight] = useState("");
  const [position, setPosition] = useState("");
  const [guardian, setGuardian] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
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

  const firebase = useFirebase();

  const register = firebase.authUser;

  const registrationFields = {
    name,
    DOB: dob,
    gradYear,
    height,
    position,
    guardian,
    relationship,
    contactPhone: phone,
    contactEmail: email,
    country,
    province,
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
    youtubeLink: youtube
  };

  const handleSubmit = e => {
    e.preventDefault();
    register(email, password, "PSA", registrationFields);
  };

  return (
    <Container maxWidth={false}>
      <Container fixed>
        <form
          style={{ marginBottom: "100px", textAlign: "left" }}
          onSubmit={handleSubmit}
        >
          <h3 style={{ textAlign: "left" }}>INFORMATION</h3>
          <br />
          <TextField
            id="name"
            label="Full Name"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            required
            error={name ? false : true}
            value={name}
            helperText={name ? "" : "required"}
            margin="normal"
            name={name}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <TextField
            id="dob"
            label="Date Of Birth"
            style={{ margin: 8 }}
            placeholder=""
            type="date"
            required
            error={dob ? false : true}
            value={dob}
            helperText={dob ? "" : "required"}
            margin="normal"
            name={dob}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setDob(e.target.value)}
          />
          <TextField
            id="gradYear"
            label="Graduating Class"
            style={{ margin: 8 }}
            placeholder=""
            type="date"
            required
            error={gradYear ? false : true}
            value={gradYear}
            helperText={gradYear ? "" : "required"}
            margin="normal"
            name={gradYear}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setGradYear(e.target.value)}
          />
          <TextField
            id="height"
            label="Height (inches)"
            style={{ margin: 8 }}
            placeholder=""
            type="number"
            error={height ? false : true}
            value={height}
            helperText={height ? "" : "required"}
            margin="normal"
            name={height}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setHeight(e.target.value)}
          />
          <TextField
            id="position"
            label="Position"
            style={{ margin: 8 }}
            placeholder=""
            error={position ? false : true}
            value={position}
            margin="normal"
            name={position}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setPosition(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "left" }}>PERSONAL / GUARDIAN CONTACT</h3>
          <br />
          <TextField
            id="guardian"
            label="Guardians Name"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            error={guardian ? false : true}
            value={guardian}
            margin="normal"
            name={guardian}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setGuardian(e.target.value)}
          />
          <TextField
            id="relationship"
            label="Relationship"
            style={{ margin: 8 }}
            placeholder=""
            value={relationship}
            error={relationship ? false : true}
            margin="normal"
            name={relationship}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setRelationship(e.target.value)}
          />
          <TextField
            id="phone"
            label="Phone Number"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={phone ? false : true}
            value={phone}
            helperText={phone ? "" : "required"}
            margin="normal"
            name={phone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setPhone(e.target.value)}
          />
          <TextField
            id="email"
            label="Email Adress"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={email ? false : true}
            value={email}
            helperText={email ? "" : "required"}
            margin="normal"
            name={email}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Make it Whoop Password"
            type="password"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={password ? false : true}
            value={password}
            helperText={password ? "" : "required"}
            margin="normal"
            name={password}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "left" }}>MAILING ADDRESS</h3>
          <br />
          <TextField
            id="country"
            label="Country"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={country ? false : true}
            value={country}
            helperText={country ? "" : "required"}
            margin="normal"
            name={country}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setCountry(e.target.value)}
          />
          <TextField
            id="province"
            label="Province"
            style={{ margin: 8 }}
            placeholder=""
            required
            error={province ? false : true}
            value={province}
            helperText={province ? "" : "required"}
            margin="normal"
            name={province}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setProvince(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>SOCIAL MEDIA</h3>
          <br />
          <TextField
            id="instagram"
            label="Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={instagram ? false : true}
            value={instagram}
            helperText={instagram ? "" : "required"}
            margin="normal"
            name={instagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setInstagram(e.target.value)}
          />
          <TextField
            id="twitter"
            label="Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={twitter ? false : true}
            value={twitter}
            helperText={twitter ? "" : "required"}
            margin="normal"
            name={twitter}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setTwitter(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>WINTER TEAM</h3>
          <TextField
            id="winter"
            label="Winter Team Name "
            style={{ margin: 8 }}
            placeholder=""
            error={winter ? false : true}
            value={winter}
            margin="normal"
            name={winter}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWinter(e.target.value)}
          />
          <TextField
            id="wleague"
            label="Winter Team's League "
            style={{ margin: 8 }}
            placeholder=""
            error={wleague ? false : true}
            value={wleague}
            margin="normal"
            name={wleague}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWLeague(e.target.value)}
          />

          <TextField
            id="winstagram"
            label="Team's Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={winstagram ? false : true}
            value={winstagram}
            margin="normal"
            name={winstagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWinstagram(e.target.value)}
          />
          <TextField
            id="wtwitter"
            label="Team's Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={wtwitter ? false : true}
            value={wtwitter}
            margin="normal"
            name={wtwitter}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWtwitter(e.target.value)}
          />
          <TextField
            id="wcoach"
            label="Coach's Name"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoach ? false : true}
            value={wcoach}
            margin="normal"
            name={wcoach}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWcoach(e.target.value)}
          />
          <TextField
            id="wcoachphone"
            type="number"
            label="Coach's Number"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoachphone ? false : true}
            value={wcoachphone}
            margin="normal"
            name={wcoachphone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWcoachphone(e.target.value)}
          />
          <TextField
            id="wcoachemail"
            type="email"
            label="Coach's Email"
            style={{ margin: 8 }}
            placeholder=""
            error={wcoachemail ? false : true}
            value={wcoachemail}
            margin="normal"
            name={wcoachemail}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWcoachemail(e.target.value)}
          />
          <TextField
            id="wjersy"
            type="number"
            max="99"
            min="1"
            label="Jersey Number"
            style={{ margin: 8 }}
            placeholder=""
            error={wjersy ? false : true}
            value={wjersy}
            margin="normal"
            name={wjersy}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setWjersy(e.target.value)}
          />
          <h3 style={{ textAlign: "LEFT" }}>SUMMER TEAM</h3>
          <TextField
            id="summer"
            label="Summer Team Name "
            style={{ margin: 8 }}
            placeholder=""
            error={summer ? false : true}
            value={summer}
            margin="normal"
            name={summer}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setSummer(e.target.value)}
          />
          <TextField
            id="sleague"
            label="Summer Team's League "
            style={{ margin: 8 }}
            placeholder=""
            error={sleague ? false : true}
            value={sleague}
            margin="normal"
            name={sleague}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setSleague(e.target.value)}
          />

          <TextField
            id="sinstagram"
            label="Team's Instagram"
            style={{ margin: 8 }}
            placeholder=""
            error={sinstagram ? false : true}
            value={sinstagram}
            margin="normal"
            name={sinstagram}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setSinstagram(e.target.value)}
          />
          <TextField
            id="stwitter"
            label="Team's Twitter "
            style={{ margin: 8 }}
            placeholder=""
            error={stwitter ? false : true}
            value={stwitter}
            margin="normal"
            name={stwitter}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setStwitter(e.target.value)}
          />
          <TextField
            id="scoach"
            label="Coach's Name"
            style={{ margin: 8 }}
            placeholder=""
            error={scoach ? false : true}
            value={scoach}
            margin="normal"
            name={scoach}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setScoach(e.target.value)}
          />
          <TextField
            id="scoachphone"
            type="number"
            label="Coach's Number"
            style={{ margin: 8 }}
            placeholder=""
            error={scoachphone ? false : true}
            value={scoachphone}
            margin="normal"
            name={scoachphone}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setScoachphone(e.target.value)}
          />
          <TextField
            id="scoachemail"
            type="email"
            label="Coach's Email"
            style={{ margin: 8 }}
            placeholder=""
            error={scoachemail ? false : true}
            value={scoachemail}
            margin="normal"
            name={scoachemail}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setScoachemail(e.target.value)}
          />
          <TextField
            id="sjersy"
            type="number"
            max="99"
            min="1"
            label="Jersey Number"
            style={{ margin: 8 }}
            placeholder=""
            error={sjersy ? false : true}
            value={sjersy}
            margin="normal"
            name={sjersy}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setSjersy(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "LEFT" }}>MEDIA</h3>
          <TextField
            id="image"
            label="Profile Image URL"
            style={{ margin: 8 }}
            placeholder=""
            error={image ? false : true}
            value={image}
            margin="normal"
            name={image}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setImage(e.target.value)}
          />
          <TextField
            id="youtube"
            label="Youtube Highlight Video"
            style={{ margin: 8 }}
            placeholder=""
            error={youtube ? false : true}
            value={youtube}
            margin="normal"
            name={youtube}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setYoutube(e.target.value)}
          />
          <br />
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
