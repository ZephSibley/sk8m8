import React, { useState, } from 'react';
import { Formik } from 'formik';
import *  as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import BackendValidationError from '../text/BackendValidationError';


const LoginForm = ({ requests }) => {
    const formClasses = formStyles();

    const [submitError, setSubmitError] = useState([])

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        password: Yup.string()
            .min(6, "min. 6 characters")
            .required("Please enter your password")
    })

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    requests.post(
                        `${process.env.REACT_APP_ENDPOINT}account/login`,
                        values,
                        {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                            }
                        }
                    ).then(response => {
                        console.log(response)
                        //window.sessionStorage.setItem('token', JSON.parse(response).jwt)
                        //window.location.href = "/"
                    })/*.catch(err => {
                        setSubmitting(false);
                        setSubmitError(err.message || Object.values(JSON.parse(err)));
                    })*/
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
                            className={formClasses.form}
                        >
                            <TextField
                                name='email'
                                type='email'
                                label='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                margin='normal'
                                error={errors.email && touched.email}
                                helperText={
                                    errors.email && touched.email ?
                                        errors.email : ''
                                }
                            />
                            <TextField
                                name='password'
                                type='password'
                                label='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                margin='normal'
                                error={errors.password && touched.password}
                                helperText={
                                    errors.password && touched.password ?
                                        errors.password : ''
                                }
                            />
                            <BackendValidationError resp={submitError} />
                            <Button
                                variant="contained"
                                color="primary"
                                component="button"
                                className={formClasses.submit}
                                type="submit"
                                margin='normal'
                                disabled={isSubmitting || !isValid}
                            >
                                Log in
                            </Button>
                        </form>
                    )}
            />
        </div>
    )
}

export default LoginForm;