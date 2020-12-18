import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Logo from "../components/logo/logo.component";

const RestrictedLayout = ({ children }) => (
  <Container maxWidth="xs">
    <Box height="100vh" display="flex" flexDirection="column">
      <Box>
        <Logo />
      </Box>
      {children}
    </Box>
  </Container>
);

export default RestrictedLayout
