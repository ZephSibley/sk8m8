import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <LoginForm />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})