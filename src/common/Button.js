import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import constant from "../theme/constants.json";

const AppButton = withStyles({
  outlined: {
    background: "white",
    color: constant.shiningBlue,
    border: `2px solid ${constant.shiningBlue}`,
    "&:hover": {
      background: constant.shiningBlue,
      color: "white",
      border: `2px solid ${"white"}`,
    },
  },
  contained: {
    background: constant.shiningBlue,
    color: "white",
    border: `2px solid ${"white"}`,
    "&:hover": {
      background: "white",
      color: constant.shiningBlue,
      border: `2px solid ${constant.shiningBlue}`,
    },
  },
})(Button);

export default AppButton;
