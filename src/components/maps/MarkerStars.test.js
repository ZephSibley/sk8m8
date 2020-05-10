import React from 'react';
import renderer from 'react-test-renderer';
import mockAxios from '../../utils/__mocks__/mockAxios';
import MarkerStars from './MarkerStars';

test('Not starred by user', () => {
    const component = renderer.create(
        <MarkerStars 
            markerId={1}
            requests={mockAxios}
            starCount={100}
            hasStarred={false}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
});

test('Starred by user', () => {
    const component = renderer.create(
        <MarkerStars 
            markerId={1}
            requests={mockAxios}
            starCount={100}
            hasStarred={true}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
});

test('No stars', () => {
    const component = renderer.create(
        <MarkerStars 
            markerId={1}
            requests={mockAxios}
            starCount={0}
            hasStarred={true}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
});
