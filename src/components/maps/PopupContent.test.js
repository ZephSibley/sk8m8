import React from 'react';
import renderer from 'react-test-renderer';
import PopupContent from './PopupContent';

test('Basic Rendering', () => {
    const component = renderer.create(
        <PopupContent 
            markerId={1}
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})