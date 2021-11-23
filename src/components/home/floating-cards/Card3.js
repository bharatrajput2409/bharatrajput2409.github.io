import React from "react";
import { CardHeader, makeStyles, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import bharatImage from "../../../media/Growth.png";
import constant from "../../../theme/constants.json";

const useStyles = makeStyles(() => ({
  wraper: {
    margin: "0 .5rem",
    transformStyle: "preserve-3d",
    transition: "transform 300ms",
    cursor: "default",
    position: "absolute",
    left: "380px",
    top: "0px",
    transform:
      "translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
    "&:hover": {
      transform:
        "scale(1.5,1.5) translate(0px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)",
      zIndex: "1000",
    },
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: " none",
  },
  root: {
    width: "230px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px",
    margin: ".5rem",
    animation: "cardUpDown 2.1s ease-in-out infinite",
  },
  avatar: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "48px",
  },
  countContainer: {
    fontSize: "24px",
    textAlign: "right",
    paddingRight: "2rem",
    color: "green",
  },
  percentageMore: {
    padding: ".4rem",
    color: "rgba(0,0,0,0.6)",
    textAlign: "right",
  },
}));

const AppCardHeader = withStyles({
  root: {
    padding: ".5rem",
  },
  avatar: {
    marginRight: ".5rem",
  },
  title: {
    fontWeight: "bold",
    color: constant.shiningBlue,
  },
})(CardHeader);

function Card3() {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Paper className={classes.root}>
        <AppCardHeader
          avatar={<img src={bharatImage} className={classes.avatar} />}
          title="User Visited"
        />
        <Typography className={classes.countContainer}>
          <ArrowUpwardIcon />
          100
        </Typography>
        <Typography className={classes.percentageMore}>
          +20% more then last week
        </Typography>
      </Paper>
    </div>
  );
}

Card3.prototype = {};

export default Card3;
