import React from 'react';
import renderer from 'react-test-renderer';
import LeafletMap from './LeafletMap';

test('Basic Rendering', () => {
    const component = renderer.create(
        <LeafletMap
            location={[50,50]}
            radius={5}
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
});

test('No Location Specified', () => {
    const component = renderer.create(
        <LeafletMap
            radius={5}
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})