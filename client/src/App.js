import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch } from "react-router-dom";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loading from "./components/loading/loading.component";
import PublicRoute from "./components/routes/public-route.component";
import PrivateRoute from "./components/routes/private-route.component";

import defaultTheme from "./config/material-theme";

import { publicRoutes, restrictedRoutes, privateRoutes } from "./config/routes";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const isLoggedIn = Boolean(currentUser);

  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <Suspense fallback={<Loading show={true} />}>
          <Switch>
            {publicRoutes.map((item) => (
              <PublicRoute
                key={item.id}
                isLoggedIn={isLoggedIn}
                restricted={false}
                component={item.component}
                path={item.path}
                exact={item.exact}
              />
            ))}
            {restrictedRoutes.map((item) => (
              <PublicRoute
                key={item.id}
                isLoggedIn={isLoggedIn}
                restricted={true}
                component={item.component}
                path={item.path}
                exact={item.exact}
              />
            ))}
            {privateRoutes.map((item) => (
              <PrivateRoute
                key={item.id}
                isLoggedIn={isLoggedIn}
                component={item.component}
                path={item.path}
                exact={item.exact}
              />
            ))}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
