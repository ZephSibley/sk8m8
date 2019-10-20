import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';


class VideoInput extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
    this.showFileUpload = this.showFileUpload.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
  }

  state = {
    file: undefined,
    imagePreviewUrl: undefined
  };

  showFileUpload() {
    if (this.fileUpload) {
      this.fileUpload.current.click();
    }
  }

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
      <div>
        <input
          style={{ display: "none" }}
          id={name}
          name={name}
          type="file"
          accept="video/*"
          onChange={this.handleVideoChange}
          ref={this.fileUpload}
        />
        <Button
            color='primary'
            onClick={this.showFileUpload}
            margin='normal'
        >
            {title}
            <VideoLibraryOutlinedIcon />
        </Button>
        {errorMessage ? (
          <Typography variant="caption" color="error">
            {errorMessage}
          </Typography>
        ) : null}
      </div>
    );
  }
}

export default VideoInput;
