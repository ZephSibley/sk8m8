import React from 'react';
import renderer from 'react-test-renderer';
import CreateMarkerForm from './CreateMarkerForm';
import mockAxios from '../../../utils/__mocks__/mockAxios';

test('Basic Rendering', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: ['Skatepark', 'Rail', 'Plaza']
        })
    )
    const component = renderer.create(
        <CreateMarkerForm location={[50,50]} requests={mockAxios} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})