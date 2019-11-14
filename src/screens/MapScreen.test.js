import React from 'react';
import renderer from 'react-test-renderer';
import MapScreen from './MapScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <MapScreen />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})