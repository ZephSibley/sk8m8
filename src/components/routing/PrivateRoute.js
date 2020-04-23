import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.sessionStorage.getItem('token') ?
      <Component {...props} /> :
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute