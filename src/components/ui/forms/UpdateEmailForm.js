import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';


const UpdateEmailForm = () => {
    const formClasses = formStyles();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        confirm_email: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Emails must match'),
    })
    
    return (
        <Formik
            initialValues={{
                email: '',
                confirm_email: '',
                username: '',
                password: '',
                confirm_password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) =>{
                console.log(values)
                setSubmitting(true);
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
                    <Button
                        variant="outlined"
                        color="primary"
                        component="button"
                        type="submit"
                        margin='normal'
                        className={formClasses.submit}
                        disabled={isSubmitting || !isValid}
                    >
                        Update Email
                    </Button>
                </form>
            )}
        />
    )
}

export default UpdateEmailForm;