import React from 'react';
import VideoInput from './VideoInput';
import renderer from 'react-test-renderer';


test('Basic Rendering', () => {
    const component = renderer.create(
        <VideoInput
            field={{name:"marker_video"}}
            title="Upload"
            errorMessage="msg"
        />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
})