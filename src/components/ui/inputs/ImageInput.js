import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import FormHelperText from '@material-ui/core/FormHelperText';


const ImageInput = props => {
    const [fileName, setFileName] = useState('');

    const handleVideoChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
            reader.onloadend = () => setFileName(file.name);
            reader.readAsDataURL(file);
            props.setFieldValue(props.field.name, file);
        }
    }

    return (
        <FormControl margin='normal'>
            <input
                style={{ display: "none" }}
                id='image-upload'
                name={props.field.name}
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleVideoChange}
            />
            <label htmlFor="image-upload">
                <Button
                    color='primary'
                    margin='normal'
                    component="span"
                >
                    {props.title}
                    <InsertPhotoIcon />
                </Button>
            </label>
            {fileName ? (
                <FormHelperText id="image-upload-filename">
                    {fileName}
                </FormHelperText>
            ) : null}
            {props.errorMessage ? (
                <FormHelperText id="image-upload-helper-text" error={true}>
                    {props.errorMessage}
                </FormHelperText>
            ) : null} 
        </FormControl>
    );
}


export default ImageInput;
