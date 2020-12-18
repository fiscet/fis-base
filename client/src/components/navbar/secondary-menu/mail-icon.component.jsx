import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import MailIcon from "@material-ui/icons/Mail";

const MailIconComponent = ({ badge, ...props }) => {
  return (
    <IconButton color="inherit" {...props}>
      <Badge badgeContent={badge} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
  );
};

export default MailIconComponent