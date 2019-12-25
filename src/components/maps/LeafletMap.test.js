import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';
import mockAxios from '../../utils/__mocks__/mockAxios';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Basic Rendering', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: [{id: 1, coords: [50,50]}]
        })
    )
    const component = shallow(
        <LeafletMap
            location={[50,50]}
            radius={5}
            requests={mockAxios}
        />
    )
});

test('No Location Specified', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: [{id: 1, coords: [50,50]}]
        })
    )
    const component = shallow(
        <LeafletMap
            radius={5}
            requests={mockAxios}
        />
    )
})