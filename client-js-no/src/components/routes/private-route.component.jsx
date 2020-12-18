import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  path: string,
  exact: boolean,
  isLoggedIn: boolean,
  component: React.ComponentType<any>,
}

const PrivateRoute = ({ component, isLoggedIn, ...rest }: Props) => {

  if (!isLoggedIn) {
    return <Route {...rest} render={() => <Redirect to="/login" />} />
  }

  return <Route {...rest} component={component} />
};

export default PrivateRoute;