import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import constant from "../theme/constants.json";

const useStyles = makeStyles(() => ({
  root: {
    height: constant.headerHeight,
  },
  wraper: {
    maxWidth: "1400px",
    margin: "auto",
    height: constant.headerHeight,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logotext: {
    fontSize: "32px",
    color: constant.lightBlackText,
  },
  linksContainer: {
    display: "flex",
  },
  links: {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "0 1rem",
    color: constant.lightBlackText,
    // background: "rgba(0,0,0,.2)",
    borderRadius: ".5rem",
    padding: ".25rem .5rem",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wraper}>
        <Typography className={classes.logotext} component="div">
          BharatRajput
        </Typography>
        <div className={classes.linksContainer}>
          <Typography className={classes.links} variant="caption">
            projects
          </Typography>
          <Typography className={classes.links} variant="caption">
            resume
          </Typography>
          <Typography className={classes.links} variant="caption">
            contact-me
          </Typography>
        </div>
      </div>
    </div>
  );
}

Header.prototype = {};

export default Header;
