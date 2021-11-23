import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "rgba(0,0,0,0.1)",
    padding: "1rem",
    borderRadius: ".5rem",
  },
  rightContainer: {
    flexGrow: 1,
  },
}));

function ProjectCard({ left, right }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>{left}</div>
      <div className={classes.rightContainer}>{right}</div>
    </div>
  );
}

ProjectCard.prototype = {};

export default ProjectCard;
