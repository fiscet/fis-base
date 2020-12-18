import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "../../logo/logo.component";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "200px",
  },
}));

const NavLogoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo />
    </div>
  );
};

export default NavLogoComponent;
