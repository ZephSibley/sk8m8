import React from 'react';
import { shallow } from 'enzyme';
import ChatView from './ChatView';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Shallow Rendering', () => {
    const component = shallow(
        <ChatView
            interlocutor={'Zeph'}
        />
    );
})