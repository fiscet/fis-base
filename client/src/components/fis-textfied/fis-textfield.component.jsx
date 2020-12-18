import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  textbox: {
    backgroundColor: "#ffffff",
  },
}));

const FisTextfieldComponent = ({ className: addedClassName, ...props }) => {
  const classes = useStyles();

  return <TextField className={`${classes.textbox} ${addedClassName}`} {...props} />;
};

export default FisTextfieldComponent;
