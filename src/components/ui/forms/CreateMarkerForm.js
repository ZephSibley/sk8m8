import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import *  as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import VideoInput from '../inputs/VideoInput';
import formStyles from '../../../styles/forms';
import BackendValidationError from '../text/BackendValidationError';
import { Typography } from '@material-ui/core';


const CreateMarkerForm = props => {
    // prop: location; array, latlng
    // prop: requests; http client

    const formClasses = formStyles()

    const [locationTypes, updateLocationTypes] = useState(
        <option>Loading...</option>
    );
    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState([]);

    useEffect(() => {
        props.requests.get(
            `${process.env.REACT_APP_ENDPOINT}mapmarker/locationTypes`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        ).then(response => {
            const options = response.data.map((type, index) =>
                <option key={index}>{type}</option>
            );
            options.unshift(<option key="blank" ></option>)
            updateLocationTypes(options);
        }).catch( updateLocationTypes(
                <option>Something went wrong D:</option>
            ));
    }, [props.requests]);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Please give your marker a name")
            .min(3, "min. 3 characters"),
        category: Yup.string()
            .required("What kind of location are you marking?"),
        /* VIDEO UPLOAD FEATURE
        video: Yup.mixed()
            .required("We need a video!")
            .test(
                "fileSize",
                "Your video is too big :(",
                value => value && value.size <= 262144000
            )
        */
    })

    return (
        <div>
            <h4 className={formClasses.embeddedFormHeader}>
                Make your mark
        </h4>
            <Formik
                initialValues={{
                    name: '',
                    category: '',
                    video: null,
                    latitude: props.location[0],
                    longitude: props.location[1],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values)
                    props.requests.post(
                        `${process.env.REACT_APP_ENDPOINT}mapmarker/create`,
                        values,
                        {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                            }
                        }
                    ).then(response =>
                        setSuccess(true)
                    ).catch(err => {
                        setSubmitError(err.message || Object.values(JSON.parse(err)));
                        setSubmitting(false);
                    });
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
                            <FormHelperText>
                                Mark this location on the map for others to see!<br />
                                {/*Include a video but please keep it under 10 seconds. VIDEO UPLOAD FEATURE */}
                            </FormHelperText>
                            <TextField
                                name='name'
                                label='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                margin='normal'
                                error={errors.name && touched.name}
                                helperText={
                                    errors.name && touched.name ?
                                        errors.name : ''
                                }
                            />
                            <FormControl margin='normal' style={{ maxWidth: 200 }}>
                                <InputLabel htmlFor="category">Location Type</InputLabel>
                                <Select
                                    native
                                    inputProps={{ name: 'category', id: 'category' }}
                                    style={{ width: 200, }}
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {locationTypes}
                                </Select>
                                {errors.category &&
                                    touched.category &&
                                    <FormHelperText id="category_helper_text" error={true}>
                                        {errors.category}
                                    </FormHelperText>
                                }
                            </FormControl>
                            {process.env.REACT_APP_video_FEATURE ?
                            <Field
                                name="video"
                                component={VideoInput}
                                title="Upload"
                                setFieldValue={setFieldValue}
                                errorMessage={errors.video ?
                                    errors.video : ''
                                }
                                touched={touched.video}
                                onBlur={handleBlur}
                            /> :
                            <Typography color="textSecondary">Video upload coming soon!</Typography>
                            }
                            <BackendValidationError resp={submitError} />
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