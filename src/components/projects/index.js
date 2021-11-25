import React from "react";
import { makeStyles } from "@material-ui/core";

import linearBanner_1 from "../../media/linearBanner_1.svg";
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
