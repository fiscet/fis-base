import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteComponent = ({ component, isLoggedIn, ...rest }) => {
  if (!isLoggedIn) {
    return <Route {...rest} render={() => <Redirect to="/login" />} />;
  }

  return <Route {...rest} component={component} />;
};

export default PrivateRouteComponent;
