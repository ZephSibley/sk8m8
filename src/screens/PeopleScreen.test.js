import React from 'react';
import { shallow } from 'enzyme';
import PeopleScreen from './PeopleScreen';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Basic Rendering', () => {
    const component = shallow(
        <PeopleScreen />
    )
})