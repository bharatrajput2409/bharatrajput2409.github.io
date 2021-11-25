import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import constant from "../../theme/constants.json";
import AppButton from "../../common/Button";
import FloatingCards from "./FloatingCards";
import TechCard from "./floating-cards/TechCard";
import bg_image from "../../media/top_banner_bg.svg";
const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(98.77deg, #FFFFFF 4.47%, #F1F4F8 119.99%)",
    backgroundImage: `url(${bg_image})`,
  },
  wraper: {
    display: "flex",
    maxWidth: "1400px",
    margin: "auto",
    paddingTop: "3rem",
  },
  leftContainer: {
    width: "50%",
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
            I'm Bharat Singh Rajput
          </Typography>
          <Typography className={classes.myDescription}>
            I am a passionate developer having knolwedge of may technology and
            ready to explore many more technology{" "}
          </Typography>
          <div className={classes.knowmore}>
            <AppButton
              variant="contained"
              style={{ borderRadius: "2rem", fontWeight: "600" }}
            >
              Know more
            </AppButton>
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
