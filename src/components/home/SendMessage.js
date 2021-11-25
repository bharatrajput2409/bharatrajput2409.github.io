import React from "react";
import {
  alpha,
  Dialog,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Input from "@material-ui/core/Input";
import AppButton from "../../common/Button";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "1rem 0",
  },
  heading: {
    fontWeight: "600",
    color: alpha("#000", 0.7),
    fontSize: "1.5rem",
  },
  topWraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: "1rem",
    color: "rgba(0,0,0,0.5)",
    padding: ".5rem .25rem",
  },
  input: {
    border: "2px solid rgba(0,0,0,.1)",
    background: "rgba(0,0,0,.05)",
    width: "100%",
    maxWidth: "400px",
    padding: ".5rem",
    borderRadius: ".5rem",
    color: "rgba(0,0,0,0.6)",
    outline: "none",
  },
}));

const AppInput = withStyles({
  root: {
    display: "block",
    borderRadius: ".5rem",
    padding: ".25rem",
    maxWidth: "400px",
  },
  focused: {
    // background: "red",
  },
})(Input);

function MessageDialog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topWraper}>
        <Typography className={classes.heading}>Send Me A Message</Typography>
      </div>
      <Typography className={classes.label} variant="caption" component="div">
        Your email
      </Typography>
      <input className={classes.input} placeholder="Enter email" name="email" />
      <Typography className={classes.label} variant="caption" component="div">
        Message
      </Typography>
      <textarea
        className={classes.input}
        placeholder="Enter email"
        name="email"
        rows="4"
        style={{ maxWidth: "600px" }}
      />
      <br />
      <AppButton variant="outlined" style={{ borderRadius: "2rem" }}>
        Send
      </AppButton>
    </div>
  );
}

MessageDialog.prototype = {};

export default MessageDialog;
