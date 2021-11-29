import React from "react";
import {
  Avatar,
  CardHeader,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import bharatImage from "../../../media/bharat_rajput_blue.png";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wraper: {
    margin: "0 .5rem",
    transformStyle: "preserve-3d",
    transition: "transform 300ms",
    cursor: "default",
    position: "absolute",
    left: 0,
    top: 0,
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
      left: "8rem",
      top: "5rem",
      transform:
        "translate(0px) perspective(5200px) rotate(-90deg) rotateY(45deg) rotateZ(45deg) scale(.8,.8)",
      "&:hover": {
        transform:
          "scale(1.5,1.5) translate(0px) perspective(5200px) rotate(-90deg) rotateY(45deg) rotateZ(45deg)",
        zIndex: "1000",
      },
    },
  },
  root: {
    width: "280px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardUpDown 2.1s ease-in-out infinite 600ms",
  },
  heading: {
    padding: ".5rem",
    fontWeight: "bold",
    color: "rgba(0,0,0,.7)",
  },
  middleDiv: {
    padding: "0 .40rem",
    textAlign: "justify",
  },
  checkoutMore: {
    padding: ".5rem .4rem",
    color: "rgb(85, 105, 255)",
  },
}));

const AppCardHeader = withStyles({
  root: {
    padding: ".5rem",
  },
  avatar: {
    marginRight: ".5rem",
  },
})(CardHeader);

function Card1() {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root}>
        <AppCardHeader
          avatar={<Avatar src={bharatImage} className={classes.avatar} />}
          title="Bharat Rajput"
          subheader="Software Engineer"
        />
        <Typography component="div" className={classes.middleDiv}>
          I am Bharat Singh.Pursuing B.Tech form National Institute of
          technology Karnataka.
        </Typography>
        <Typography className={classes.checkoutMore}>
          <a
            href="https://drive.google.com/file/d/1cqcPSkPL_DSmtZvi7KaJl-3fQb_UZjQI/view"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
          >
            Checkout my Resume
          </a>
        </Typography>
      </Paper>
    </div>
  );
}

Card1.prototype = {};

export default Card1;
