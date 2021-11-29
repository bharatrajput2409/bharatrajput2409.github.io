import { Tooltip, withStyles } from "@material-ui/core";

import constant from "../theme/constants.json";

const AppTooltip = withStyles({
  tooltip: {
    background: constant.blueColor,
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
  },
})(Tooltip);

export default AppTooltip;
