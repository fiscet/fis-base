import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import NotificationIcon from "@material-ui/icons/Notifications";

const NotificationIconComponent = ({ badge, ...props }) => {
  return (
    <IconButton color="inherit" {...props}>
      <Badge badgeContent={badge} color="secondary">
        <NotificationIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationIconComponent