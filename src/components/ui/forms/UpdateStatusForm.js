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

    const validationSchema = Yup.object().shape({
        marker_name: Yup.string()
            .required("")
            .max(200, "Too long!"),
    });

    return (
        <div>
            <Formik
                initialValues={{ status: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    props.requests.post(
                        `${process.env.REACT_APP_ENDPOINT}account/updatestatus`,
                        values,
                        {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                            }
                        }
                    ).then(response =>
                        setSubmitting(false)
                    ).catch(err => {
                        setSubmitting(false);
                        setSubmitError(err.response ?  err.response.data : err.message);
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
                                label={props.currentStatus ||'Whatcha sayin?'}
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
                                disabled={isSubmitting || !isValid}
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