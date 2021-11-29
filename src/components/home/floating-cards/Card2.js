import React from "react";
import {
  CardHeader,
  IconButton,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LaunchIcon from "@material-ui/icons/Launch";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppTooltip from "../../../common/Tooltip";

const useStyles = makeStyles((theme) => ({
  wraper: {
    margin: "0 .5rem",
    transformStyle: "preserve-3d",
    transition: "transform 300ms",
    cursor: "default",
    position: "absolute",
    left: "-80px",
    top: "180px",
    transform:
      "translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
    "&:hover": {
      transform:
        "scale(1.5,1.5) translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
      zIndex: "1000",
    },
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: " none",
    [theme.breakpoints.down("md")]: {
      left: "-6rem",
      top: "3rem",
      transform:
        "translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg) scale(.8,.8) ",
    },
  },
  root: {
    width: "250px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardUpDown 2.1s ease-in-out infinite 300ms",
  },
  socialHeading: {
    padding: ".25rem 1rem",
    fontWeight: "600",
    color: "rgba(0,0,0,0.6)",
  },
  anchor: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const AppCardHeader = withStyles({
  root: {
    padding: ".5rem",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },
  },
  avatar: {
    marginRight: ".5rem",
  },
  title: {
    fontWeight: "700",
  },
})(CardHeader);

function Card2() {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root}>
        <Typography className={classes.socialHeading}>
          Social handles
        </Typography>
        <a
          className={classes.anchor}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bharatsinghrajput/"
        >
          <AppTooltip title="Visit my LinkedIn profile">
            <AppCardHeader
              avatar={<LinkedInIcon />}
              title="@bharatrajput"
              action={
                <IconButton>
                  <LaunchIcon />
                </IconButton>
              }
            />
          </AppTooltip>
        </a>
        <a
          className={classes.anchor}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/bharatrajput2409"
        >
          <AppTooltip title="Visit my Github profile">
            <AppCardHeader
              avatar={<GitHubIcon />}
              title="@bharatrajput2409"
              action={
                <IconButton>
                  <LaunchIcon />
                </IconButton>
              }
            />
          </AppTooltip>
        </a>
        <a
          className={classes.anchor}
          target="_blank"
          rel="noreferrer"
          href="mailto:bharatsinghnitk@gmail.com"
        >
          <AppTooltip title="Mail me">
            <AppCardHeader
              avatar={<MailOutlineTwoToneIcon />}
              title="bharatsinghnitk@gmail"
              action={
                <IconButton>
                  <LaunchIcon />
                </IconButton>
              }
            />
          </AppTooltip>
        </a>
      </Paper>
    </div>
  );
}

Card2.prototype = {};

export default Card2;
