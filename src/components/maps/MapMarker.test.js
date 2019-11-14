import React from 'react';
import renderer from 'react-test-renderer';
import MapMarker from './MapMarker';

test('Basic Rendering', () => {
    const component = renderer.create(
        <MapMarker
            id={1}
            coords={[50,50]}
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})