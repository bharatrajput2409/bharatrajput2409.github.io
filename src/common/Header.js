import React from "react";
import { alpha, IconButton, makeStyles, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import constant from "../theme/constants.json";
import link_bg from "../media/glassEffect.gif";
import './style.css'
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: constant.headerHeight,
    position: "sticky",
    top: "0",
    zIndex: "1000",
    backdropFilter: "blur(10px)",
    padding: "0 1rem",
  },
  wraper: {
    maxWidth: "1400px",
    margin: "auto",
    height: constant.headerHeight,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  links: {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "0 1rem",
    color: constant.lightBlackText,
    borderRadius: ".5rem",
    padding: ".25rem .5rem",
    textDecoration: "none",
    
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  mobileMenuContainer: {
    height: `calc(100vh - ${constant.headerHeight})`,
    zIndex: "1000",
    backdropFilter: "blur(6px)",
    padding: "0 1rem",
    position: "fixed",
    left: "0",
    right: "0",
    top: constant.headerHeight,
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(-110%)",
    transition: "transform 300ms",
    display: "none",
  },
  links_mobile: {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "1rem",
    color: "black",
    borderRadius: ".5rem",
    padding: ".5rem 1rem",
    textDecoration: "none",
  },
}));

function Header() {
  const classes = useStyles();
  const [isDrawer, setIsDrawer] = React.useState(false);
  const handleDrawer = () => {
    setIsDrawer(!isDrawer);
  };
  const links = [
    {
      label: "resume",
      href: "https://drive.google.com/file/d/1cqcPSkPL_DSmtZvi7KaJl-3fQb_UZjQI/view",
      target: "_blank",
    },
    {
      label: "projects",
      href: "#projects",
      target: "_self",
    },
    {
      label: "contact-me",
      href: "#send-message",
      target: "_self",
    },
  ];
  return (
    <>
      <div className={classes.root}>
        <div className={classes.wraper}>
          <Typography className='colorFullText logoTextBharatRajput' component="div">
            BharatRajput
          </Typography>
          <div className={classes.linksContainer}>
            {links.map((link) => (
              <Typography
                className={clsx(classes.links,'colorFullText')}
                component="a"
                variant="caption"
                href={link.href}
                target={link.target}
              >
                {link.label}
              </Typography>
            ))}
          </div>
          <IconButton className={classes.menuIcon} onClick={handleDrawer}>
            <MenuIcon style={{ height: "2rem", width: "2rem" }} color="linear-gradient(90deg,#1e8bff,#6955ff 45%,#a83af5 50%,#c03ada 75%)" />
          </IconButton>
        </div>
      </div>
      <div
        className={classes.mobileMenuContainer}
        style={isDrawer ? { transform: "translate(0%)" } : {}}
        onClick={handleDrawer}
      >
        {links.map((link) => (
          <Typography
            className={classes.links_mobile}
            component="a"
            variant="caption"
            href={link.href}
            target={link.target}
          >
            {link.label}
          </Typography>
        ))}
      </div>
    </>
  );
}

Header.prototype = {};

export default Header;
