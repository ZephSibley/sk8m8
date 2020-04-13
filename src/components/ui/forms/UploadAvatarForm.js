import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import *  as Yup from 'yup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import ImageInput from '../inputs/ImageInput';


const UploadAvatarForm = ({ requests }) => {
    // prop: requests; http client

    const [submitError, setSubmitError] = useState(null);

    const validationSchema = Yup.object().shape({
        avatar: Yup.mixed()
            .required("Please select an image")
            .test(
                "fileSize",
                "Your image is too big :(",
                value => value.size <= 104857600
            )
            .test(
                "fileType",
                "png or jpeg only please",
                value => value.type === 'image/jpeg' || value.type === 'image/png'
            )
    })

    const formClasses = formStyles()
    return (
        <Formik
            initialValues={{
                avatar: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                requests.post(
                    `${process.env.REACT_APP_ENDPOINT}account/updateavatar`,
                    values,
                    { withCredentials: true }
                ).catch(err => {
                    setSubmitError(err.message);
                    setSubmitting(false);
                })
            }}

            render={({
                values,
                errors,
                touched,
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
            }) => (
                    <form
                        onSubmit={handleSubmit}
                        className={formClasses.form}
                    >
                        <Field
                            name="avatar"
                            component={ImageInput}
                            title="Avatar"
                            setFieldValue={setFieldValue}
                            errorMessage={errors.marker_video ?
                                errors.marker_video : ''
                            }
                            touched={touched.marker_video}
                            onBlur={handleBlur}
                        />
                        {values.avatar ? 
                            <Button
                                variant="contained"
                                color="primary"
                                component="button"
                                type="submit"
                                disabled={isSubmitting || !isValid}
                            >
                                Upload
                            </Button>
                        : ''
                        }
                        {submitError ?
                            <FormHelperText
                                    component={'span'}
                                    error={true}
                                >
                                    {submitError}
                            </FormHelperText>
                        : ''
                        }
                    </form>
                )}
        />
    )
}

export default UploadAvatarForm;