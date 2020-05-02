import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';


const LogoutForm = ({ requests }) => {

    return (
        <div style={{position: "absolute", right: 0}}>
            <Formik
                
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    window.sessionStorage.removeItem('token')
                    window.location.href = "/"
                }}

                render={({
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
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