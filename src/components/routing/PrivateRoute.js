import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import getCookie from '../../utils/browser/getCookie';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getCookie('jwt') ?
      <Component {...props} /> :
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute