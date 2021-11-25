import React from "react";
import { alpha, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import constant from "../theme/constants.json";

const useStyles = makeStyles(() => ({
  root: {},
  bottomBanner: {
    background: constant.shiningBlue,
    padding: ".5rem 0",
    color: "white",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topBanner: {
    background: alpha(constant.shiningBlue, 0.3),
    color: alpha("#000", 0.8),
  },
  textarea: {
    width: "calc(100% - 2rem)",
    margin: ".5rem 1rem",
    background: alpha(constant.shiningBlue, 0.1),
    border: "none",
    resize: "none",
    padding: ".5rem",
    borderRadius: ".5rem",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topBanner}>
        <Typography>Bharat Singh Rajput</Typography>
      </div>
      <Typography className={classes.bottomBanner}>
        Developed with <FavoriteIcon style={{ margin: "0 .5rem" }} /> Bharat
        Rajput
      </Typography>
    </div>
  );
}

Footer.prototype = {};

export default Footer;
