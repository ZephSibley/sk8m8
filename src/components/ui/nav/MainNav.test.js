import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router} from 'react-router-dom';
import MainNav from './MainNav';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Basic Rendering', () => {
    const component = shallow(
        <Router>
            <MainNav />
        </Router>
    );
})