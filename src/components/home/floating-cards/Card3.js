import React from "react";
import {
  CardHeader,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import bharatImage from "../../../media/Growth.png";
import constant from "../../../theme/constants.json";
import VisitingUser from "../../../api/visiting-users";
import { Skeleton } from "@material-ui/lab";

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
    height: "150px",
    overflow: "hidden",
  },
  avatar: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "48px",
  },
  countContainer: {
    fontSize: "24px",
    color: "green",
    textAlign: "right",
    paddingRight: "1rem",
  },
  percentageMore: {
    padding: ".4rem",
    color: "rgba(0,0,0,0.6)",
    textAlign: "right",
  },
  skeleton: {
    margin: "0",
    padding: "0",
    height: "5.2rem",
    transform: "scale(1, 1)",
    transformOrigin: "0 60%",
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
const AppTooltip = withStyles({
  tooltip: {
    background: constant.blueColor,
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
  },
})(Tooltip);

function Card3() {
  const classes = useStyles();
  const [data, setData] = React.useState(null);
  const getData = async () => {
    try {
      var res = await VisitingUser.getVisitedUsers();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.wraper}>
      <AppTooltip title="Total users visited so far">
        <Paper className={classes.root}>
          <AppCardHeader
            avatar={
              <img
                src={bharatImage}
                className={classes.avatar}
                alt="bharat profile"
              />
            }
            title="User Visited"
          />
          {data ? (
            <>
              <Typography className={classes.countContainer}>
                <ArrowUpwardIcon />
                {data?.total}
              </Typography>
              <Typography className={classes.percentageMore}>
                {Math.floor(
                  ((data?.thisWeek - data?.lastWeek) / data?.lastWeek) *
                    100 *
                    100
                ) / 100}
                % then last week
              </Typography>
            </>
          ) : (
            <Skeleton className={classes.skeleton} animation="wave" />
          )}
        </Paper>
      </AppTooltip>
    </div>
  );
}

Card3.prototype = {};

export default Card3;
