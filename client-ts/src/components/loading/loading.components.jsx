import React from "react";
import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: theme.zIndex.drawer + 1,
  },
  spinner: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    border: "3px solid rgba(195, 195, 195, 0.6)",
    borderRadius: "50%",
    borderTopColor: "#636767",
    animation: "spin 1s ease-in-out infinite",

    "@keyframes spin": {
      "to": {
        transform: "rotate(360deg)"
      }
    }
  }
}));

type Props = {
  show: boolean,
}

const Loading = ({ show }: Props) => {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={show || false}
    >
      <div className={classes.spinner}></div>
    </Backdrop>
  );
}

export default Loading;
