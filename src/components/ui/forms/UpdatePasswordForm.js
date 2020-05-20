import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

import formStyles from '../../../styles/forms';
import BackendValidationError from '../text/BackendValidationError';


const UpdatePasswordForm = ({ requests }) => {
    const formClasses = formStyles();

    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, "min. 6 characters")
            .required("Please enter your password"),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    
    return (
        <Formik
            initialValues={{
                oldPassword: '',
                password: '',
                confirm_password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) =>{
                setSubmitting(true);
                setSuccess(false);
                requests.post(
                    `${process.env.REACT_APP_ENDPOINT}account/changepassword`,
                    values,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                ).then(e =>{
                    setSubmitting(false);
                    setSuccess(true);
                }).catch(err => {
                    setSubmitting(false);
                    if (err.response && err.response.status === 401) {
                        setSubmitError("Incorrect Password")
                    }
                    setSubmitError(err.message || Object.values(JSON.parse(err)));
                });
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
                >
                    <TextField
                        name='oldPassword'
                        type='password'
                        label='current password'
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
                        name='password'
                        type='password'
                        label='new password'
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
                    <BackendValidationError resp={submitError} />
                    <Button
                        variant="outlined"
                        color="primary"
                        component="button"
                        type="submit"
                        margin='normal'
                        className={formClasses.submit}
                        disabled={isSubmitting || !isValid}
                    >
                        {success ? <CheckIcon /> : "Update Password"}
                    </Button>
                </form>
            )}
        />
    )
}

export default UpdatePasswordForm;