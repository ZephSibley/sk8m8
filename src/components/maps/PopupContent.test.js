import React from 'react';
import renderer from 'react-test-renderer';
import mockAxios from '../../utils/__mocks__/mockAxios';
import PopupContent from './PopupContent';

test('Basic Rendering', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: {
                name: 'Name!',
                locationType: 'Skatey',
                creator: 'Zeph!'
            }
        })
    )

    const component = renderer.create(
        <PopupContent 
            markerId={1}
            requests={mockAxios}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})