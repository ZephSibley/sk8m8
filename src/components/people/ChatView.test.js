import React from 'react';
import renderer from 'react-test-renderer';
import ChatView from './ChatView';

test('Basic Rendering', () => {
    const component = renderer.create(
        <ChatView
            interlocutor={'Zeph'}
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})