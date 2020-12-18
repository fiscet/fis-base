import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "../../logo/logo.component";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "200px",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    alignSelf: "stretch",
  },
}));

const NavLogoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo style={{ alignSelf: "center" }} />
    </div>
  );
};

export default NavLogoComponent;
