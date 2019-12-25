import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <Router>
            <Route path='/' component={LoginScreen} />
        </Router>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})