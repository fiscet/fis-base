import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";

import AccountCircle from "@material-ui/icons/AccountCircle";

import MailIconComponent from "./mail-icon.component";
import NotificationIconComponent from "./notification-icon.component";

const useStyles = makeStyles((theme) => ({
  viewInDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  viewInMobile: {
    isplay: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const SecondaryMenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem className={classes.viewInMobile}>
        <MailIconComponent badge={6} />
        <p>Messages</p>
      </MenuItem>
      <MenuItem className={classes.viewInMobile}>
        <NotificationIconComponent badge={13} />
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box display="flex">
      <MailIconComponent badge={6} className={classes.viewInDesktop} />
      <NotificationIconComponent badge={13} className={classes.viewInDesktop} />

      <IconButton edge="end" onClick={handleOpen} color="inherit">
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </Box>
  );
};

export default SecondaryMenuComponent;
