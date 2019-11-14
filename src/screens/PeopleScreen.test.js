import React from 'react';
import renderer from 'react-test-renderer';
import PeopleScreen from './PeopleScreen';

test('Basic Rendering', () => {
    const component = renderer.create(
        <PeopleScreen />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})