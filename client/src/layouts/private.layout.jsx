import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { signOutStart } from "../redux/user/user.actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import LogoComponent from "../components/navbar/nav-logo/nav-logo.component";
import MainMenuComponent from "../components/navbar/main-menu/main-menu.component";
import SecondaryMenuComponent from "../components/navbar/secondary-menu/secondary-menu.component";
import SearchComponent from "../components/navbar/search/search.component";

const PrivateLayout = ({ currentUser, onLogout, children }) => {

  // console.log({ currentUser });

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <MainMenuComponent onLogout={onLogout} />

          <LogoComponent />

          <SearchComponent />

          <Box flexGrow={1} />

          <SecondaryMenuComponent />
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </Container>
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateLayout);