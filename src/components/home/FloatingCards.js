import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Card1 from "./floating-cards/Card1";
import Card2 from "./floating-cards/Card2";
import Card3 from "./floating-cards/Card3";
import ResumeCard from "./floating-cards/ResumeCard";
import ProfileImageCard from "./floating-cards/ProfileImageCard";
import TechCard from "./floating-cards/TechCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    flexGrow: "1",
    perspective: "5200px",
  },
}));

function FloatingCards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card1 />
      <Card2 />
      <Card3 />
      <ResumeCard />
      <ProfileImageCard />
    </div>
  );
}

FloatingCards.prototype = {};

export default FloatingCards;
