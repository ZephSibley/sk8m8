import React from 'react';
import { shallow  } from 'enzyme';
import ErrorModal from './ErrorModal';

test('Error Message Renders', () => {
    const component = shallow(
        <ErrorModal
            open={true}
        />
    );
})