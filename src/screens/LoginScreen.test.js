import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from './LoginScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <LoginScreen />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})