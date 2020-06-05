import React from 'react';
import { shallow  } from 'enzyme';
import TsCs from './TsCs';

test('Error Message Renders', () => {
    const component = shallow(
        <TsCs
            open={true}
        />
    );
})