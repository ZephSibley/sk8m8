import React from 'react';
import renderer from 'react-test-renderer';
import PersonListItem from './PersonListItem';

test('Basic Rendering', () => {
    const component = renderer.create(
        <PersonListItem
            username='Zeph'
            avatar=''
            bio='Hi There!'
            chat={function() {return true}}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})