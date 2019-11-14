import React from 'react';
import renderer from 'react-test-renderer';
import UpdatePasswordForm from './UpdatePasswordForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <UpdatePasswordForm />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})