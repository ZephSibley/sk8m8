import React from 'react';
import renderer from 'react-test-renderer';
import SignupScreen from './SignupScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <SignupScreen />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})