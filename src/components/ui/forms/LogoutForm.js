import React, { useState, } from 'react';
import { Formik } from 'formik';
import *  as Yup from 'yup';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import BackendValidationError from '../text/BackendValidationError';


const LogoutForm = ({ requests }) => {
    const [submitError, setSubmitError] = useState([])

    return (
        <div style={{position: "absolute", right: 0}}>
            <Formik
                
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    requests.get(
                        `${process.env.REACT_APP_ENDPOINT}account/sitelogout`,
                        { withCredentials: true }
                    ).then(response => {
                        window.localStorage.setItem('authenticated', false)
                        window.location.href = "/"
                    }).catch(err => {
                        setSubmitting(false);
                        setSubmitError(err.message || Object.values(JSON.parse(err)));
                    })
                }}

                render={({
                    values,
                    handleSubmit,
                    isSubmitting,
                    isValid,
                }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <BackendValidationError resp={submitError} />
                            <Button
                                color="primary"
                                component="button"
                                type="submit"
                                margin='normal'
                                disabled={isSubmitting}
                            >
                                Log out
                            </Button>
                        </form>
                    )}
            />
        </div>
    )
}

export default LogoutForm;