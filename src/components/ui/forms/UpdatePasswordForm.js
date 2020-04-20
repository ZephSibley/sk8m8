import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';


const UpdatePasswordForm = () => {
    const formClasses = formStyles();

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
                current_password: '',
                password: '',
                confirm_password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) =>{
                //console.log(values)
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
                >
                    <TextField
                        name='current_password'
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
                    <Button
                        variant="outlined"
                        color="primary"
                        component="button"
                        type="submit"
                        margin='normal'
                        className={formClasses.submit}
                        disabled={isSubmitting || !isValid}
                    >
                        Update Password
                    </Button>
                </form>
            )}
        />
    )
}

export default UpdatePasswordForm;