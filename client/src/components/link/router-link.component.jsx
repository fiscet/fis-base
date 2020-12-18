import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    }
  },
}));

const RouterLinkComponent = ({ children, to }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.root}>
      {children}
    </Link>
  );
};

export default RouterLinkComponent;
