import React from "react";
import { CardHeader, makeStyles, Paper } from "@material-ui/core";

import linearBanner_1 from "../../media/linearBanner_1.svg";
import bharatImage from "../../media/bharat_rajput.png";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "1500px",
    backgroundImage: `url(${linearBanner_1})`,
  },
  myinfocard: {
    background: "white",
    maxWidth: "1000px",
    margin: "1rem auto",
    minHeight: "200px",
    position: "relative",
    top: "100px",
    padding: "1rem",
    display: "flex",
  },
  imageContainer: {
    borderRadius: "50%",
    padding: ".5rem",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  },
  profileImage: {
    height: "calc(200px - 2rem)",
    borderRadius: "50%",
    width: "calc(200px - 2rem)",
  },
}));

const AppHeader = withStyles({
  root: {},
})(CardHeader);

function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.myinfocard} elevation="5">
        <AppHeader
          avatar={
            <div className={classes.imageContainer}>
              <img
                src={bharatImage}
                alt="bharat singh"
                className={classes.profileImage}
              />
            </div>
          }
          title="Bharat Singh Rajput"
        />
      </Paper>
    </div>
  );
}

AboutMe.prototype = {};

export default AboutMe;
