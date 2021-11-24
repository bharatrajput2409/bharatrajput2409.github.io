import React from "react";
import { alpha, makeStyles, Tooltip } from "@material-ui/core";

import constant from "../../../theme/constants.json";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    cursor: "pointer",
    width: "80px",
    bottom: "16px",
    top: "0",
  },
  column: {
    position: "absolute",
    width: "50px",
    bottom: "0",
    borderRadius: ".25rem .25rem 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    "&>*": {
      transform: "rotateZ(-90deg)",
      color: constant.blueColor,
      fontSize: "24px",
      fontWeight: "600",
    },
    transition: "height 300ms",
    border: `2px solid ${constant.blueColor}`,
    borderBottom: "none",
    background: alpha(constant.blueColor, 0.2),
  },
}));

const AppTooltip = withStyles({
  tooltip: {
    background: constant.blueColor,
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
  },
})(Tooltip);

function TechColumn({ tech, index }) {
  const classes = useStyles();
  const ref = React.useRef(tech.knowledge * 25);
  const [top, setTop] = React.useState(tech.knowledge * 25);
  const handleMouseOver = (e) => {
    setTop(150);
  };
  const handleMouseLeave = (e) => {
    setTop(ref.current);
  };
  return (
    <AppTooltip title={`${tech.knowledge}/10`}>
      <div
        className={classes.root}
        style={{
          left: `${30 + 80 * index}px`,
        }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={classes.column}
          key={tech.name}
          style={{
            height: top + "px",
            // background: tech.background,
          }}
        >
          <span>{tech.name}</span>
        </div>
      </div>
    </AppTooltip>
  );
}

TechColumn.prototype = {};

export default React.memo(TechColumn);
