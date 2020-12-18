import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  path: string,
  exact: boolean,
  isLoggedIn: boolean,
  restricted: boolean,
  component: React.ComponentType<any>,
}

const PublicRoute = ({ component, isLoggedIn, restricted, ...rest }: Props) => {

  // restricted = false meaning public route
  // restricted = true meaning restricted route

  if (isLoggedIn && restricted) {
    return <Route {...rest} render={() => <Redirect to="/dashboard" />} />
  }

  return <Route {...rest} component={component} />
};

export default PublicRoute