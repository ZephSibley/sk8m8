import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from './UserCard';

test('Basic Rendering', () => {
    const component = renderer.create(
        <UserCard
            username='testymctestface'
            bio='hello, this is dog'
            avatar=''
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})