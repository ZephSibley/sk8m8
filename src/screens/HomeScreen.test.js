import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <HomeScreen />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})