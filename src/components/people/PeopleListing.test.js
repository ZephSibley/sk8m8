import React from 'react';
import renderer from 'react-test-renderer';
import mockAxios from '../../utils/__mocks__/mockAxios';
import PeopleListing from './PeopleListing';

test('Basic Rendering', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve([
            {
                username: 'Name!',
                avatar: '../../assets/img/ajax-loader.gif',
                bio: 'hey hey hey',
                chat: function(){}
            },
            {
                username: 'testymctestface',
                avatar: '../../assets/img/ajax-loader.gif',
                bio: 'amwd;uneagjnegiohwedjwnfun',
                chat: function(){}
            }
        ])
    )

    const component = renderer.create(
        <PeopleListing
            location={[50, 50]}
            requests={mockAxios}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})