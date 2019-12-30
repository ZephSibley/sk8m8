import React from 'react';
import ImageInput from './ImageInput';
import renderer from 'react-test-renderer';


test('Basic Rendering', () => {
    const component = renderer.create(
        <ImageInput
            field={{name:"marker_video"}}
            title="Upload"
            errorMessage="msg"
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})