import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import standard from './styles/themes/standard';
import PrivateRoute from './components/routing/PrivateRoute';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import PeopleScreen from './screens/PeopleScreen';


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={standard}>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
          <PrivateRoute path="/" component={HomeScreen} />
          <PrivateRoute path="/trickspot" component={MapScreen} />
          <PrivateRoute path="/people" component={PeopleScreen} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
