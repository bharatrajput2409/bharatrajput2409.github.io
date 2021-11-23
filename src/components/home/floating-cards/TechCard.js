import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

import constants from "../../../theme/constants.json";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

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
    animation: "cardUpDown 2.1s ease-in-out infinite 600ms",
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
    border: `1px solid rgba(0,0,0,0.3)`,
  },
  verticalLine: {
    position: "absolute",
    left: "15px",
    top: "3rem",
    bottom: "15px",
    border: `1px solid rgba(0,0,0,0.3)`,
  },
  markerline: {
    position: "absolute",
    top: "0px",
    transform: "translate(-50%,-50%)",
    color: "rgba(0,0,0,0.3)",
  },
  column: {
    position: "absolute",
    width: "50px",
    bottom: "16px",
    borderRadius: ".25rem .25rem 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>*": {
      transform: "rotateZ(-90deg)",
      color: "white",
      fontSize: "24px",
      fontWeight: "600",
    },
  },
}));

function TechCard() {
  const classes = useStyles();
  const techArray = [
    {
      name: "React",
      top: "50px",
      left: "30px",
      background: "#f44336",
    },
    {
      name: "Django",
      top: "80px",
      left: "110px",
      background: "#009688",
    },
    {
      name: "NodeJs",
      top: "50px",
      left: "190px",
      background: "#ffc107",
    },
    {
      name: "Redux",
      top: "50px",
      left: "270px",
      background: "#ef6c00",
    },
  ];
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root}>
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
        {techArray.map((tech) => (
          <div
            className={classes.column}
            key={tech.name}
            style={{
              left: tech.left,
              top: tech.top,
              background: tech.background,
            }}
          >
            <span>{tech.name}</span>
          </div>
        ))}
      </Paper>
    </div>
  );
}

TechCard.prototype = {};

export default TechCard;
