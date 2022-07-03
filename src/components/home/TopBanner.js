import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import constant from "../../theme/constants.json";
import AppButton from "../../common/Button";
import FloatingCards from "./FloatingCards";
import TechCard from "./floating-cards/TechCard";
import bg_image from "../../media/top_banner_bg.svg";
import bg_image_mobile from "../../media/top_banner_bg_mobile.svg";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(90deg,#1e8bff,#6955ff 45%,#a83af5 50%,#c03ada 75%)',
    backgroundImage: `url(${bg_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${bg_image_mobile})`,
      backgroundSize: "cover",
    },
    overflow: "hidden",
  },
  wraper: {
    display: "flex",
    maxWidth: "1400px",
    margin: "auto",
    paddingTop: "3rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingTop: "0rem",
      padding: "0 1rem",
    },
  },
  leftContainer: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightContainer: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    minHeight: "420px",
  },
  hiContainer: {
    color: "rgba(0,0,0,.7)",
    marginTop: "5rem",
    fontWeight: "bold",
  },
  nameContainer: {
    fontSize: "48px",
    color: constant.lightBlackText,
    fontWeight: "600",
  },
  myDescription: {
    color: "#6955ff",
    marginTop: "1rem",
    marginRight: "5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0rem",
      padding: 0,
    },
  },
  knowmore: {
    margin: "2rem 0 2rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 0 2rem 0rem",
    },
  },
  onlyDesktop: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function TopBanner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wraper}>
        <div className={classes.leftContainer}>
          <Typography className={clsx(classes.hiContainer,'colorFullText')}>Hi,</Typography>
          <Typography className={clsx(classes.nameContainer,'colorFullText')}>
            I'm Bharat Singh Rajput
          </Typography>
          <Typography className={classes.myDescription}>
            I am a final year student pursuing B.Tech at National Institute of
            Technology Karnataka, Surathkal.My primary interests lie in full
            stack web development and I enjoy learning about new technologies
            and building useful things with it.
          </Typography>
          <div className={classes.knowmore}>
            <AppButton
              variant="outlined"
              style={{ borderRadius: "2rem", fontWeight: "600" }}
            >
              <a
                href="https://drive.google.com/file/d/1cqcPSkPL_DSmtZvi7KaJl-3fQb_UZjQI/view"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </AppButton>
          </div>
          <div className={classes.onlyDesktop}>
            <TechCard />
          </div>
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
