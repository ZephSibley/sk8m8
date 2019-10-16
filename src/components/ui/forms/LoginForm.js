import React from 'react';
import { Formik } from 'formik';
import *  as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';

const LoginForm = () => {
    const formClasses = formStyles();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        password: Yup.string()
            .min(6, "min. 6 characters")
            .required("Please enter your password")
    })

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(true);
            }}
        >
            {({
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
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        className={formClasses.submit}
                        type="submit"
                        margin='normal'
                        disabled={isSubmitting || !isValid}
                    >
                        Log in
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default LoginForm;