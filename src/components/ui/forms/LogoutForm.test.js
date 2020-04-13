import React from 'react';
import renderer from 'react-test-renderer';
import LogoutForm from './LogoutForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <LogoutForm />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})