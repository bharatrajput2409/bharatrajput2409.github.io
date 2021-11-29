import React from "react";
import { makeStyles, Tooltip, Typography } from "@material-ui/core";

import constant from "../../theme/constants.json";
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  wraper: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "1rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "rgba(0,0,0,0.6)",
  },
  caption: {
    color: "rgba(0,0,0,0.6)",
    fontSize: ".9rem",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "2rem 0",
    [theme.breakpoints.down("md")]: {},
  },
  image: {
    height: "70px",
    margin: "1rem 3rem",
    [theme.breakpoints.down("md")]: {
      margin: ".5rem",
    },
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
function TechUsed() {
  const classes = useStyles();
  const tech1 = [
    { name: "HTML5", img: "html5.svg" },
    { name: "CSS3", img: "css3.svg" },
    { name: "Bootstrap-4", img: "bootstrap-4.svg" },
    { name: "JavaScript", img: "js.svg" },
    { name: "ReactJS", img: "react.svg" },
    { name: "MySql", img: "mysql.svg" },
    { name: "MongoDB", img: "mongodb.svg" },
    { name: "Django", img: "django.svg" },
    { name: "Express", img: "express.svg" },
    { name: "NodeJS", img: "nodejs.svg" },
    { name: "SK Learn", img: "sklearn.svg" },
    { name: "Figma", img: "figma.svg" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.wraper}>
        <Typography className={classes.heading}>Technologies I Use</Typography>
        <Typography variant="caption" className={classes.caption}>
          Here are some of the technologies that I use
        </Typography>
        <div className={classes.imageContainer}>
          {tech1.map((tech) => (
            <AppTooltip title={tech.name}>
              <img
                src={require(`../../media/${tech.img}`).default}
                alt={tech.name}
                key={tech.name}
                className={classes.image}
              />
            </AppTooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

TechUsed.prototype = {};

export default TechUsed;
