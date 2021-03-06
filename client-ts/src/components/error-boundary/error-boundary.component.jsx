import React, { Component, ReactElement, ErrorInfo } from 'react';
import { Box } from "@material-ui/core"

interface Props {
  children: ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box padding={3} textAlign="center">
          <h1>Sorry this page is broken</h1>
          <img src="https://i.imgur.com/yW2W9SC.png" alt="" />
        </Box>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
