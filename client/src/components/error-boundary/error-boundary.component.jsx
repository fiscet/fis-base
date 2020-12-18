import React, { Component } from "react";
import { Box } from "@material-ui/core";

class ErrorBoundaryComponent extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box padding={3} textAlign="center">
          <h1>Sorry this page is broken</h1>
          <img src="https://i.imgur.com/yW2W9SC.png" alt="" />
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryComponent;
