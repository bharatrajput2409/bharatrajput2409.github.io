import React from "react";
import { makeStyles, Paper, Tooltip, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { withStyles } from "@material-ui/core/styles";

import constant from "../../../theme/constants.json";

const useStyles = makeStyles(() => ({
  wraper: {
    margin: "0 .5rem",
    transformStyle: "preserve-3d",
    transition: "transform 300ms",
    position: "absolute",
    left: "230px",
    top: "80px",
    transform:
      "translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
    "&:hover": {
      transform:
        "scale(1.5,1.5) translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
      zIndex: "1000",
    },
  },
  root: {
    width: "300px",
    height: "300px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardUpDown 2.1s ease-in-out infinite 900ms",
    padding: "1rem",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  smalltext: {
    fontSize: "10px",
  },
  icons: {
    fontSize: "12px",
    color: "black",
  },
  checkout: {
    color: "rgba(0,0,255,0.7)",
    fontSize: "12px",
    textAlign: "right",
    paddingTop: ".5rem",
  },
}));
const AppTooltip = withStyles({
  tooltip: {
    background: constant.blueColor,
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
  },
})(Tooltip);
function ResumeCard() {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <AppTooltip title="Mini-Resume">
        <Paper className={classes.root}>
          <div className={classes.flex}>
            <Typography style={{ fontWeight: "bold" }}>Bharat Singh</Typography>
            <Typography style={{ fontSize: "10px" }}>
              bharatsinghnitk@gmail.com
            </Typography>
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext} style={{ color: "blue" }}>
              <LinkedInIcon className={classes.icons} />
              LinkedIn <GitHubIcon className={classes.icons} />
              GitHub
            </Typography>
            <Typography
              style={{ fontSize: "10px", transform: "translateY(-10px)" }}
            >
              +917427064864
            </Typography>
          </div>
          <Typography style={{ fontSize: "13px" }}>Education</Typography>
          <hr />
          <div className={classes.flex}>
            <Typography
              className={classes.smalltext}
              style={{ fontWeight: "600" }}
            >
              National Institute of technology Karnataka
            </Typography>
            {/* <Typography className={classes.smalltext}>2018-2022</Typography> */}
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              B.Tech Civil Engineering
            </Typography>
            <Typography className={classes.smalltext}>2018-2022</Typography>
          </div>
          <Typography style={{ fontSize: "13px" }}>Experience</Typography>
          <hr />
          <div className={classes.flex}>
            <Typography
              className={classes.smalltext}
              style={{ fontWeight: "600" }}
            >
              SDE Intern
            </Typography>
            {/* <Typography className={classes.smalltext}>AgencyConnect</Typography> */}
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              AgencyConnect PVT LTD
            </Typography>
            <Typography className={classes.smalltext}>
              may 2021 - june 2021
            </Typography>
          </div>
          <Typography style={{ fontSize: "13px" }}>Projects</Typography>
          <hr />
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              <FiberManualRecordIcon
                style={{ fontSize: "7px", color: "rgba(0,0,0,0.6)" }}
              />
              Hesc Website
            </Typography>
            <Tooltip title="visit hesc.nitk.ac.in">
              <Typography
                className={classes.smalltext}
                style={{ color: "blue" }}
              >
                hesc.nitk.ac.in
              </Typography>
            </Tooltip>
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              <FiberManualRecordIcon
                style={{ fontSize: "7px", color: "rgba(0,0,0,0.6)" }}
              />
              Blogging website
            </Typography>
            <Tooltip title="visit webclub.nitk.ac.in">
              <Typography
                className={classes.smalltext}
                style={{ color: "blue" }}
              >
                webclub.nitk.ac.in
              </Typography>
            </Tooltip>
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              <FiberManualRecordIcon
                style={{ fontSize: "7px", color: "rgba(0,0,0,0.6)" }}
              />
              Community support website
            </Typography>
            <Tooltip title="visit bharatrajput2409.pythonanywhere.com">
              <Typography
                className={classes.smalltext}
                style={{ color: "blue" }}
              >
                Link
              </Typography>
            </Tooltip>
          </div>
          <Typography style={{ fontSize: "13px" }}>
            Extracurricular Activities
          </Typography>
          <hr />
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              <FiberManualRecordIcon
                style={{ fontSize: "7px", color: "rgba(0,0,0,0.6)" }}
              />
              Google developer student club NITK
            </Typography>
            <Typography className={classes.smalltext}>Member</Typography>
          </div>
          <div className={classes.flex}>
            <Typography className={classes.smalltext}>
              <FiberManualRecordIcon
                style={{ fontSize: "7px", color: "rgba(0,0,0,0.6)" }}
              />
              Hesc NITK
            </Typography>
            <Typography className={classes.smalltext}>Web Lead</Typography>
          </div>
          <Typography className={classes.checkout}>
            Checkout Full Resume
          </Typography>
        </Paper>
      </AppTooltip>
    </div>
  );
}

ResumeCard.prototype = {};

export default ResumeCard;
