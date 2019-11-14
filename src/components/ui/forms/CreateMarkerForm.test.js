import React from 'react';
import renderer from 'react-test-renderer';
import CreateMarkerForm from './CreateMarkerForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <CreateMarkerForm />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})