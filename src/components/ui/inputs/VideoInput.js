import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';


class VideoInput extends Component {
    constructor(props) {
        super(props);
        this.handleVideoChange = this.handleVideoChange.bind(this);
    }

    state = {
        file: undefined,
    };

    handleVideoChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };
            reader.readAsDataURL(file);
            this.props.setFieldValue(this.props.field.name, file);
        }
    }


    render() {
        const { errorMessage, title } = this.props;
        const { name } = this.props.field;

        return (
            <FormControl margin='normal'>
                <input
                    style={{ display: "none" }}
                    id='video-upload'
                    name={name}
                    type="file"
                    accept="video/*"
                    onChange={this.handleVideoChange}
                />
                <label htmlFor="video-upload">
                    <Button
                        color='primary'
                        margin='normal'
                        component="span"
                    >
                        {title}
                        <VideoLibraryOutlinedIcon />
                    </Button>
                </label>
                {errorMessage ? (
                    <FormHelperText id="video-upload-helper-text" error={true}>
                        {errorMessage}
                    </FormHelperText>
                ) : null}
            </FormControl>
        );
    }
}

export default VideoInput;
