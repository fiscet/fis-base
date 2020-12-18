import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouteComponent = ({ component, isLoggedIn, restricted, ...rest }) => {

  // restricted = false meaning public route
  // restricted = true meaning restricted route

  if (isLoggedIn && restricted) {
    return <Route {...rest} render={() => <Redirect to="/dashboard" />} />
  }

  return <Route {...rest} component={component} />
};

export default PublicRouteComponent