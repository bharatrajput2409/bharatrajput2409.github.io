import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import TopBanner from "./TopBanner";
import Projects from "../projects/index";
import Footer from "../../common/Footer";
import SendMessage from "./SendMessage";
import TechUsed from "./TechUsed";

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
      <TechUsed />
      {/* <Projects /> */}
      <SendMessage />
      <Footer />
    </div>
  );
}

HomePage.prototype = {};

export default HomePage;
