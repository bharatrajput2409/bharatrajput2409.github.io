import React from "react";
import { CardHeader, makeStyles, Paper } from "@material-ui/core";

import linearBanner_1 from "../../media/linearBanner_1.svg";
import bharatImage from "../../media/bharat_rajput.png";
import { withStyles } from "@material-ui/core/styles";
import WebClubProject from "./WebClubProject";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "1500px",
    backgroundImage: `url(${linearBanner_1})`,
    paddingTop: "15rem",
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WebClubProject />
      <WebClubProject />
    </div>
  );
}

Projects.prototype = {};

export default Projects;
