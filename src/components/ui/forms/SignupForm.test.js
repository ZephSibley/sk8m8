import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from './SignupForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <SignupForm />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})