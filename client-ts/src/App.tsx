import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Loading from './components/loading/loading.components';
import PublicRoute from './components/routes/public-route.component'
import PrivateRoute from './components/routes/private-route.component'

import defaultTheme from './config/material-theme';

import { publicRoutes, restrictedRoutes, privateRoutes } from './config/routes'


function App() {

  // TO DO: from redux
  const isLoggedIn = false;

  return (
    <ThemeProvider theme={defaultTheme}>

      <ErrorBoundary>
        <Suspense fallback={<Loading show={true} />}>
          <Switch>
            {
              publicRoutes.map(item => <PublicRoute key={item.id} isLoggedIn={isLoggedIn} restricted={false} component={item.component} path={item.path} exact={item.exact} />)
            }
            {
              restrictedRoutes.map(item => <PublicRoute key={item.id} isLoggedIn={isLoggedIn} restricted={true} component={item.component} path={item.path} exact={item.exact} />)
            }
            {
              privateRoutes.map(item => <PrivateRoute key={item.id} isLoggedIn={isLoggedIn} component={item.component} path={item.path} exact={item.exact} />)
            }
          </Switch>
        </Suspense>
      </ErrorBoundary>

    </ThemeProvider>);
}

export default App;
