import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import fetchLocationTypes from '../../utils/map/fetchLocationTypes';
import formStyles from '../../styles/forms';

const CreateMarkerForm = props => {
    // prop: location; array, latlng 

    const [textFieldValues, setTextFieldValues] = useState({
        name: '',
        description: '',
    });
    const [locationTypes, updateLocationTypes] = useState(
        <option>Loading...</option>
    );

    const handleChange = name => event => {
        setTextFieldValues({ ...textFieldValues, [name]: event.target.value });
    };

    useEffect(() => {
        fetchLocationTypes()
        .then(data => {
            const options = data.map((type) => 
                    <option key={type}>{type}</option>
            );
            options.unshift(<option key="blank" ></option>)
            updateLocationTypes(options);
        }).catch(
            updateLocationTypes(
                <option>Something went wrong D:</option>
            )
        );
    }, []);

    const formClasses = formStyles()
    return (
        <div>
            <h4 className={formClasses.embeddedFormHeader}>
                Make your mark
            </h4>
            <form className={formClasses.form} action="/" method="post">
                <input type='hidden' value={props.location} id='marker-location' name='marker-location' />
                <TextField
                    required
                    id='marker-name'
                    label="Name"
                    value={textFieldValues.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <FormControl>
                    <InputLabel htmlFor="location-type">Location Type</InputLabel>
                    <Select
                        required
                        native
                        inputProps={{ name: 'location-type', id: 'location-type' }}
                        style={{width: 200}}
                    >
                        {locationTypes}
                    </Select>
                </FormControl>
                <TextField
                    id='marker-creator'
                    label='Creator'
                    value={'username'/*get username*/}
                    margin='normal'
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <input
                    required
                    style={{ display: 'none' }}
                    accept="video/*"
                    id="marker-video"
                    type="file"
                />
                <label htmlFor="marker-video">
                    <Button
                        variant="outlined"
                        component="span"
                        color="secondary"
                        className={formClasses.submit}
                    >
                        Choose Video
                    </Button>
                </label>
                <input
                    type="hidden"
                    id="marker-location"
                    name="marker-location"
                    value={props.location}
                />
                <input
                    style={{ display: 'none' }}
                    id="marker-submit"
                    multiple
                    type="submit"
                />
                <label htmlFor="marker-submit">
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        className={formClasses.submit}
                    >
                        Create
                    </Button>
                </label>
            </form>
        </div>
    )
}

export default CreateMarkerForm;