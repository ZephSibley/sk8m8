import React from 'react';
import { shallow  } from 'enzyme';
import ErrorModal from './ErrorModal';

test('Error Message Renders', () => {
    const component = shallow(
        <ErrorModal
            error='Hi There!'
        />
    );
    expect(component.find('h2').text()).toEqual('Uh oh, something went wrong D:')
    expect(component.find('p').text()).toEqual('Hi There!')
})