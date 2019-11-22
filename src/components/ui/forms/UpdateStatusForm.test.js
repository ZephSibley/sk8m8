import React from 'react';
import renderer from 'react-test-renderer';
import mockAxios from '../../../utils/__mocks__/mockAxios';
import UpdateStatusForm from './UpdateStatusForm';

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
        <UpdateStatusForm
            requests={mockAxios}
            currentStatus='Hey hey hey'
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})