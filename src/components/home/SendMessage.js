import React from "react";
import {
  alpha,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

import constant from "../../theme/constants.json";
import AppButton from "../../common/Button";
import EmailMessage from "../../api/email-message";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1400px",
    margin: "0 auto",
    backgroundImage: `url(${require("../../media/chat.svg").default})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    padding: "0 1rem",
  },
  wraper: {
    backdropFilter: "blur(1px)",
    padding: "1rem 0",
    [theme.breakpoints.down("md")]: {
      backdropFilter: "blur(5px)",
    },
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
  message: {
    color: "red",
  },
}));

function MessageDialog() {
  const classes = useStyles();
  const [form, setForm] = React.useState({ _replyto: "", message: "" });
  const [sentmessage, setSentmessage] = React.useState({ color: "red" });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    setLoading(true);
    let res = await EmailMessage.sendMessage(form);
    setLoading(false);
    if (res === "Message sent") {
      setForm({ _replyto: "", message: "" });
      setSentmessage({ color: "green", message: res });
      return;
    }
    setSentmessage({ color: "red", message: res });
  };
  return (
    <div className={classes.root} id="send-message">
      <div className={classes.wraper}>
        <div className={classes.topWraper}>
          <Typography className={classes.heading}>Send Me A Message</Typography>
        </div>
        <Typography className={classes.label} variant="caption" component="div">
          Your email
        </Typography>
        <input
          className={classes.input}
          placeholder="Enter email"
          name="_replyto"
          type="email"
          value={form._replyto}
          onChange={handleChange}
        />
        <Typography className={classes.label} variant="caption" component="div">
          Message
        </Typography>
        <textarea
          className={classes.input}
          placeholder="Enter email"
          name="message"
          rows="4"
          style={{ maxWidth: "600px" }}
          value={form.message}
          onChange={handleChange}
        />
        <br />
        <AppButton
          variant="outlined"
          style={{ borderRadius: "2rem" }}
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress color={constant.shiningBlue} size="1.3rem" />
          ) : (
            "Send"
          )}
        </AppButton>
        <div style={{ color: sentmessage.color }}>{sentmessage.message}</div>
      </div>
    </div>
  );
}

MessageDialog.prototype = {};

export default MessageDialog;
