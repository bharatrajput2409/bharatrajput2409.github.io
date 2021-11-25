import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import bharatImage from "../../../media/bharat_rajput_blue.png";

const useStyles = makeStyles(() => ({
  wraper: {
    margin: "0 .5rem",
    transformStyle: "preserve-3d",
    transition: "transform 300ms",
    cursor: "default",
    position: "absolute",
    left: "100px",
    top: "310px",
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
    height: "250px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardUpDown 2.1s ease-in-out infinite",
    overflow: "hidden",
  },
  image: {
    backgroundPosition: "center",
    width: "100%",
  },
}));

function ProfileImageCard() {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root}>
        <img src={bharatImage} alt="bharat " className={classes.image} />
      </Paper>
    </div>
  );
}

ProfileImageCard.prototype = {};

export default ProfileImageCard;
