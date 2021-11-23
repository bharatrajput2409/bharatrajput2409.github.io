import React from "react";
import { alpha, makeStyles, Paper, Typography } from "@material-ui/core";

import constants from "../../../theme/constants.json";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TechColumn from "./TechColumn";

const useStyles = makeStyles(() => ({
  wraper: {},
  root: {
    marginTop: "7rem",
    width: "550px",
    height: "300px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardLeftRight 2.1s ease-in-out infinite 600ms",
    position: "relative",
  },
  heading: {
    padding: ".5rem",
    fontWeight: "bold",
    color: "rgba(0,0,0,.7)",
  },
  horizontalLine: {
    position: "absolute",
    left: "15px",
    right: "15px",
    bottom: "15px",
    border: `1px solid ${constants.blueColor}`,
  },
  verticalLine: {
    position: "absolute",
    left: "15px",
    top: "3rem",
    bottom: "15px",
    border: `1px solid ${constants.blueColor}`,
  },
  markerline: {
    position: "absolute",
    top: "0px",
    transform: "translate(-50%,-50%)",
    color: constants.blueColor,
  },
}));

function TechCard() {
  const classes = useStyles();
  const techArray = [
    {
      name: "React",
      background: "rgba(0,0,0,0.0)",
      knowledge: 9,
    },
    {
      name: "Redux",
      background: "rgba(0,0,0,0.0)",
      knowledge: 8,
    },
    {
      name: "NodeJs",
      background: "rgba(0,0,0,0.0)",
      knowledge: 9,
    },
    {
      name: "JavaScript",
      background: "rgba(0,0,0,0.0)",
      knowledge: 9,
    },
    {
      name: "Django",
      background: "rgba(0,0,0,0.0)",
      knowledge: 8,
    },
    {
      name: "C++",
      background: "rgba(0,0,0,0.0)",
      knowledge: 9,
    },
  ];
  const handleHover = (e) => {
    // console.log(e);
  };
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root} id="temp" onMouseOver={handleHover}>
        <div className={classes.heading}>Tech Knowledge</div>
        <div className={classes.horizontalLine}>
          <span
            className={classes.markerline}
            style={{ right: "0", transform: "translate(50%,calc(-50% + 1px))" }}
          >
            <ExpandLessIcon style={{ transform: "rotateZ(90deg)" }} />
          </span>
        </div>
        <div className={classes.verticalLine}>
          <span className={classes.markerline}>
            <ExpandLessIcon />
          </span>
        </div>
        {techArray.map((tech, i) => (
          <TechColumn tech={tech} index={i} />
        ))}
      </Paper>
    </div>
  );
}

TechCard.prototype = {};

export default TechCard;
