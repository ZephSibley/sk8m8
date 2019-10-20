import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import *  as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import fetchLocationTypes from '../../../utils/map/fetchLocationTypes';
import VideoInput from '../inputs/VideoInput';
import formStyles from '../../../styles/forms';


const CreateMarkerForm = props => {
    // prop: location; array, latlng

    const formClasses = formStyles()

    const [locationTypes, updateLocationTypes] = useState(
        <option>Loading...</option>
    );

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

    const validationSchema = Yup.object().shape({
        marker_name: Yup.string()
            .required("Please give your marker a name")
            .min(3, "min. 3 characters"),
        location_type: Yup.string()
            .required("What kind of location are you marking?"),
        marker_video: Yup.mixed()
            .required("We need a video!")
            .test(
                "fileSize",
                "Your video is too big :(",
                value => value && value.size <= 262144000
            )
    })

    return (
        <div>
            <h4 className={formClasses.embeddedFormHeader}>
                Make your mark
        </h4>
            <Formik
                initialValues={{
                    marker_name: '',
                    location_type: '',
                    marker_video: null,
                    location: props.location,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(true);
                }}

                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    setFieldValue,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <form
                            onSubmit={handleSubmit}
                            className={formClasses.form}
                        >
                            <TextField
                                name='marker_name'
                                label='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.marker_name}
                                margin='normal'
                                error={errors.marker_name && touched.marker_name}
                                helperText={
                                    errors.marker_name && touched.marker_name ?
                                        errors.marker_name : ''
                                }
                            />
                            <FormControl margin='normal' style={{ maxWidth: 200 }}>
                                <InputLabel htmlFor="location_type">Location Type</InputLabel>
                                <Select
                                    native
                                    inputProps={{ name: 'location_type', id: 'location_type' }}
                                    style={{ width: 200, }}
                                    value={values.location_type}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {locationTypes}
                                </Select>
                                {errors.location_type &&
                                    touched.location_type &&
                                    <FormHelperText id="location_type_helper_text">
                                        {errors.location_type}
                                    </FormHelperText>
                                }
                            </FormControl>
                            <Field
                                name="marker_video"
                                component={VideoInput}
                                title="Upload"
                                setFieldValue={setFieldValue}
                                errorMessage={errors.marker_video ?
                                    errors.marker_video : ''
                                }
                                touched={touched.marker_video}
                                onBlur={handleBlur}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                component="button"
                                type="submit"
                                margin='normal'
                                className={formClasses.submit}
                                disabled={isSubmitting || !isValid}
                            >
                                Create
                    </Button>
                        </form>
                    )}
            />
        </div>
    )
}

export default CreateMarkerForm;