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
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";

const useStyles = makeStyles(() => ({
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
        <AppCardHeader
          avatar={<LinkedInIcon />}
          title="@bharatrajput"
          action={
            <Tooltip title="visit my profile">
              <IconButton>
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          }
        />
        <AppCardHeader
          avatar={<MailOutlineTwoToneIcon />}
          title="@bharatsinghnitk"
          action={
            <Tooltip title="visit my profile">
              <IconButton>
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          }
        />
        <AppCardHeader
          avatar={<InstagramIcon />}
          title="@bharat._.singh._"
          action={
            <Tooltip title="visit my profile">
              <IconButton>
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          }
        />
      </Paper>
    </div>
  );
}

Card2.prototype = {};

export default Card2;
