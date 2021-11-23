import React from "react";
import {
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
}));

function WebClubProject() {
  const classes = useStyles();
  const left = <div className={classes.projectImageContainer}></div>;
  const right = (
    <div className={classes.projectDetails}>
      <Typography className={classes.heading}>
        Community Support website with quiz platform
      </Typography>
      <List>
        <ListItem>
          <ListItemText className={classes.whiteText}>
            Implimented features similar to those found on Geeksforgeeks and
            StackOverFlow.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText className={classes.whiteText}>
            Also desigend an quiz platform where uses can participate in live
            contest and analyse their performance form performance tracker.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText className={classes.whiteText}>
            User's can write a blog or can read blog.Only verified user's can
            write blogs.
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
  return <ProjectCard left={left} right={right} />;
}

WebClubProject.prototype = {};

export default WebClubProject;
