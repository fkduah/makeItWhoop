import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Button } from "@material-ui/core";

function getModalStyle() {
  return {
    transform: `translate(${50}%, ${50}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#f5f5f5",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  modalTitle: {
    fontFamily: "Avaro, sans-serif"
  }
}));

export default function ModalRegister(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="sm"
        color="secondary"
        style={{ fontWeight: "600" }}
        onClick={handleOpen}
      >
        {props.buttonName}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title" className={classes.modalTitle}>
            {props.modalTitle}
          </h2>
          <p id="simple-modal-description">{props.modalDescript}</p>
        </div>
      </Modal>
    </div>
  );
}
