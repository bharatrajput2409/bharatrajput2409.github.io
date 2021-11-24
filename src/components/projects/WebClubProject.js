import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

import ProjectCard from "./ProjectCard";
import community_web_image from "../../media/community_web_image.svg";

const useStyles = makeStyles(() => ({
  root: {},
  projectImageContainer: {
    backgroundImage: `url(${community_web_image})`,
    width: "517px",
    height: "429px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  projectDetails: {
    padding: "1rem",
  },
  heading: {
    fontSize: "24px",
    color: "white",
    fontWeight: "600",
  },
  whiteText: {
    color: "white",
  },
  ul: {
    padding: ".5rem 1rem",
  },
  li: {
    padding: ".5rem",
    color: "white",
  },
  techName: {
    color: "white",
    margin: "0 .5rem",
  },
  techUsedContainer: {
    display: "flex",
  },
}));

function WebClubProject() {
  const classes = useStyles();
  const projectPoints = [
    " Implimented features similar to those found on Geeksforgeeks and StackOverFlow.",
    "Also desigend an quiz platform where uses can participate in live contest and analyse their performance form performance tracker.",
    " User's can write a blog or can read blog.Only verified user's can write blogs.",
  ];
  const techUsed = [
    {
      name: "Django",
      icon: require("../../media/django-icon.svg").default,
    },
    {
      name: "MySql",
      icon: require("../../media/mysql-icon.svg").default,
    },
    {
      name: "JavaScript",
      icon: require("../../media/javascript-icon.svg").default,
    },
    {
      name: "CSS",
      icon: require("../../media/css-icon.svg").default,
    },
    {
      name: "Python",
      icon: require("../../media/python-icon.svg").default,
    },
  ];
  const left = <div className={classes.projectImageContainer}></div>;
  const right = (
    <div className={classes.projectDetails}>
      <Typography className={classes.heading}>
        Community Support website with quiz platform
      </Typography>
      <ul className={classes.ul}>
        {projectPoints.map((point, index) => (
          <li key={index} className={classes.li}>
            <Typography>{point}</Typography>
          </li>
        ))}
      </ul>
      <div className={classes.techUsedContainer}>
        {techUsed.map((tech) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar alt={tech.name} src={tech.icon} />
            <span className={classes.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return <ProjectCard left={left} right={right} />;
}

WebClubProject.prototype = {};

export default WebClubProject;
