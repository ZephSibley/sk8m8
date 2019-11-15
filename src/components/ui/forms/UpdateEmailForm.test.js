import React from 'react';
import renderer from 'react-test-renderer';
import UpdateEmailForm from './UpdateEmailForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <UpdateEmailForm />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})