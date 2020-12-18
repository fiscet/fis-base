import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  }
}))

const LogoComponent = () => {

  const classes = useStyles()

  return <img src="./images/logo.png" alt="" className={classes.root} />;
};

export default LogoComponent;