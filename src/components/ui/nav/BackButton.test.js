import React from 'react';
import renderer from 'react-test-renderer';
import BackButton from './BackButton';

test('Basic Rendering', () => {
    const component = renderer.create(
        <BackButton />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})