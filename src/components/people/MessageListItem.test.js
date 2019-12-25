import React from 'react';
import renderer from 'react-test-renderer';
import MessageListItem from './MessageListItem';

test('Basic Rendering', () => {
    const component = renderer.create(
        <MessageListItem
            sender='Zeph'
            avatar=''
            message='Hi There!'
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})