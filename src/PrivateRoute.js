import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import {UserContext, UserDispatchContext} from './context/UserProvider'

function PrivateRoute({ component: Component, ...rest }) {
  const userDetails = React.useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props =>
        userDetails.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
