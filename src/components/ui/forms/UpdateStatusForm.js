import React, { useState, } from 'react';
import { Formik } from 'formik';
import *  as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import BackendValidationError from '../text/BackendValidationError';


const UpdateStatusForm = props => {
    // Prop: requests; http client
    // Prop: currentStatus; string

    const [submitError, setSubmitError] = useState([])

    const formClasses = formStyles();
    return (
        <div>
            <Formik
                initialValues={{ status: props.currentStatus || 'Whatcha sayin?', }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(true);
                    props.requests.post(
                        `${process.env.REACT_APP_ENDPOINT}/account/status`,
                        values
                    ).then(response =>
                        setSubmitting(false)
                    ).catch(err => {
                        setSubmitting(false);
                        setSubmitError(Object.values(JSON.parse(err)));
                    })
                }}

                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    isValid,
                }) => (
                        <form
                            onSubmit={handleSubmit}
                            className={formClasses.textFieldForm}
                        >
                            <TextField
                                name='status'
                                label='status'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                                margin='normal'
                                multiline
                                rows="4"
                                error={errors.status && touched.status}
                                helperText={
                                    errors.status && touched.status ?
                                        errors.status : ''
                                }
                            />
                            <BackendValidationError resp={submitError} />
                            <Button
                                variant="outlined"
                                color="primary"
                                component="button"
                                className={formClasses.pullRight}
                                type="submit"
                                margin='normal'
                                disabled={isSubmitting}
                            >
                                Update
                            </Button>
                        </form>
                    )}
            />
        </div>
    )
}

export default UpdateStatusForm;