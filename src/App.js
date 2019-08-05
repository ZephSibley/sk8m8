import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/routing/PrivateRoute';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <PrivateRoute path="" component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
