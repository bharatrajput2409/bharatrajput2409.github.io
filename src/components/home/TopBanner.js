import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import constant from "../../theme/constants.json";
import AppButton from "../../common/Button";
import FloatingCards from "./FloatingCards";
import TechCard from "./floating-cards/TechCard";
const useStyles = makeStyles(() => ({
  root: {},
  wraper: {
    display: "flex",
    maxWidth: "1400px",
    margin: "4rem auto",
  },
  leftContainer: {
    width: "50%",
    background: "white",
  },
  rightContainer: {
    width: "50%",
  },
  hiContainer: {
    color: "rgba(0,0,0,.7)",
    marginTop: "5rem",
    fontWeight: "bold",
  },
  nameContainer: {
    fontSize: "48px",
    color: constant.lightBlackText,
  },
  myDescription: {
    color: "rgba(0,0,0,.7)",
    marginTop: "1rem",
    marginRight: "5rem",
  },
  knowmore: {
    margin: "2rem 0 2rem 2rem",
  },
}));

function TopBanner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wraper}>
        <div className={classes.leftContainer}>
          <Typography className={classes.hiContainer}>Hi,</Typography>
          <Typography className={classes.nameContainer}>
            I'm Bharat Singh Shekhawat
          </Typography>
          <Typography className={classes.myDescription}>
            I am a passionate developer having knolwedge of may technology and
            ready to explore many more technology{" "}
          </Typography>
          <div className={classes.knowmore}>
            <AppButton>Know more</AppButton>
          </div>
          <TechCard />
        </div>
        <div className={classes.rightContainer}>
          <FloatingCards />
        </div>
      </div>
    </div>
  );
}

TopBanner.prototype = {};

export default TopBanner;
