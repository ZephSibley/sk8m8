import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

let fakeAuth = {
  isAuthenticated: true,
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute