import React, { useState } from "react";

import { TextField, Container } from "@material-ui/core";

export default function CoachForm(props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [height, setHeight] = useState("");
  const [position, setPosition] = useState("");
  const [guardian, setGuardian] = useState("");

  return (
    <Container maxWidth={false}>
      <form>
        <TextField
          id=""
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
          id=""
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
          id=""
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
          id=""
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
          id=""
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
        <h3>PERSONAL/GUARDIAN CONTACT</h3>
        <TextField
          id=""
          label="Guardians Name"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          required
          error={guardian ? false : true}
          value={guardian}
          helperText={guardian ? "" : "required"}
          margin="normal"
          name={guardian}
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => setGuardian(e.target.value)}
        />
      </form>
    </Container>
  );
}
