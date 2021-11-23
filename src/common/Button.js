import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    borderRadius: "2rem",
    padding: ".4rem 1.2rem",
    color: "#0556F3",
    background: "white",
    border: "2px solid #0556F3",
    "&:hover": {
      background: "#0556F3",
      border: "2px solid white",
      color: "white",
    },
    "&:disabled": {
      opacity: ".5",
      color: "white",
    },
    fontWeight: "bold",
    textTransform: "none",
  },
  rootOutlined: {
    borderRadius: "4px",
    color: "#0556F3",
    padding: ".4rem 1rem",
    border: "1px solid #0556F3",
    "&:hover": {
      color: "white",
      background: "#0556F3",
    },
    "&:disabled": {
      color: "rgba(0, 0, 0, 0.3)",
      border: "1px solid rgba(0, 0, 0, 0.3)",
    },
  },
  rootText: {
    color: "#0556F3",
    padding: ".4rem 1rem",
    "&:disabled": {
      color: "rgba(0, 0, 0, 0.3)",
    },
  },
};

function ClassNames(props) {
  const { classes, children, className, variant, ...other } = props;
  if (variant === undefined || variant === "contained") {
    return (
      <Button className={clsx(classes.root, className)} {...other}>
        {children || "class names"}
      </Button>
    );
  } else if (variant === "text") {
    return (
      <Button className={clsx(classes.rootText, className)} {...other}>
        {children || "class names"}
      </Button>
    );
  } else {
    return (
      <Button className={clsx(classes.rootOutlined, className)} {...other}>
        {children || "class names"}
      </Button>
    );
  }
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
