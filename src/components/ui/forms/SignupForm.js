import React, { useState, } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';


const SignupForm = ({ requests }) => {
    const formClasses = formStyles();

    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        confirm_email: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Emails must match'),
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Please enter a username"),
        password: Yup.string()
            .min(6, "min. 6 characters")
            .required("Please enter your password"),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    return (
        <div>
            {success ? 
                <SuccessModal redirect='/login' /> : null
            }
            <Formik
                initialValues={{
                    email: '',
                    confirm_email: '',
                    username: '',
                    password: '',
                    confirm_password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    requests.post(
                        `${process.env.REACT_APP_ENDPOINT}/account/create`,
                        values
                    ).then(response =>
                        setSuccess(true)
                    ).catch(err => {
                        setSubmitError(err.message);
                        setSubmitting(false);
                    }
                    );

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
                                name='confirm_email'
                                type='email'
                                label='confirm email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_email}
                                margin='normal'
                                error={errors.confirm_email && touched.confirm_email}
                                helperText={
                                    errors.confirm_email && touched.confirm_email ?
                                        errors.confirm_email : ''
                                }
                            />
                            <TextField
                                name='username'
                                label='username'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                margin='normal'
                                error={errors.username && touched.username}
                                helperText={
                                    errors.username && touched.username ?
                                        errors.username : ''
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
                            <TextField
                                name='confirm_password'
                                type='password'
                                label='confirm password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                                margin='normal'
                                error={errors.confirm_password && touched.confirm_password}
                                helperText={
                                    errors.confirm_password && touched.confirm_password ?
                                        errors.confirm_password : ''
                                }
                            />
                            <FormHelperText
                                component={'span'}
                                error={true}
                            >
                                {submitError}
                            </FormHelperText>
                            <Button
                                variant="contained"
                                color="primary"
                                component="button"
                                type="submit"
                                margin='normal'
                                className={formClasses.submit}
                                disabled={isSubmitting || !isValid}
                            >
                                Sign up
                            </Button>
                        </form>
                    )}
            />
        </div>
    )
}

export default SignupForm;