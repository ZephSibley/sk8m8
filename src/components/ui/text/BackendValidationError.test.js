import React from 'react';
import renderer from 'react-test-renderer';
import BackendValidationError from './BackendValidationError';

test('Rendering a string', () => {
    const component = renderer.create(
        <BackendValidationError resp='this is a string' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})

test('Rendering an array', () => {
    const component = renderer.create(
        <BackendValidationError resp={['rendering', 'an', 'array']} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})
