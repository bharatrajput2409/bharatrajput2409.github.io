import React from "react";
import { alpha, Grid, makeStyles, Typography } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import constant from "../theme/constants.json";

const useStyles = makeStyles(() => ({
  root: {
    background: alpha(constant.shiningBlue, 0.3),
    color: alpha("#000", 0.7),
  },
  bottomBanner: {
    background: constant.shiningBlue,
    padding: ".5rem 0",
    color: "white",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topBanner: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  bharatrajput: {
    fontSize: "32px",
    padding: ".5rem",
  },
  link: {
    textDecoration: "none",
    underline: "none",
    color: "inherit",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    borderRadius: "1rem",
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },
    transition: "background 400ms",
  },
}));

function Footer() {
  const classes = useStyles();
  const socialHandles = [
    {
      icon: <MailOutlineIcon />,
      name: "Mail me",
      link: "mailto:bharatsinghnitk@gmail.com",
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/bharatsinghrajput/",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      link: "https://github.com/bharatrajput2409",
    },
    {
      icon: "",
      name: "Resume",
      link: "https://drive.google.com/file/d/1cqcPSkPL_DSmtZvi7KaJl-3fQb_UZjQI/view",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.topBanner}>
        <Typography className={classes.bharatrajput}>Bharat Rajput</Typography>
        <Grid container style={{ padding: "1rem" }}>
          {socialHandles.map((social) => (
            <Grid item xs={6} md={3}>
              <Typography
                component="a"
                target="_blank"
                className={classes.link}
                href={social.link}
              >
                {social.icon}
                <span style={{ width: "10px" }}> </span>
                {social.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography className={classes.bottomBanner}>
        Developed with <FavoriteIcon style={{ margin: "0 .5rem" }} /> by Bharat
        Rajput
      </Typography>
    </div>
  );
}

Footer.prototype = {};

export default Footer;
