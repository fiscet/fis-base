import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  }
}))

const LogoComponent = ({...props}) => {

  const classes = useStyles()

  return <img src="./images/logo.png" alt="" className={classes.root} {...props} />;
};

export default LogoComponent;