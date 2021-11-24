import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import TopBanner from "./TopBanner";
import AboutMe from "./AboutMe";
import Projects from "../projects/index";
import Footer from "../../common/Footer";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <TopBanner />
      <Projects />
      <Footer />
    </div>
  );
}

HomePage.prototype = {};

export default HomePage;
