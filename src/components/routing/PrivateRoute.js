import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

let fakeAuth = {
  isAuthenticated: true,
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute