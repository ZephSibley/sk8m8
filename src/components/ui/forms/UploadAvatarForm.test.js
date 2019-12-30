import React from 'react';
import renderer from 'react-test-renderer';
import UploadAvatarForm from './UploadAvatarForm';

test('Basic Rendering', () => {
    const component = renderer.create(
        <UploadAvatarForm requests={{}} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})