import React from 'react';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import ValidInput from '../ValidInput';

const UpdatePasswordForm = () => {
    const formClasses = formStyles();
    
    return (
        <form className={formClasses.form}>
            <ValidInput
                label='password'
                validationrules={{
                    minLength: 6,
                }}
            />
            <ValidInput
                label='confirm password'
                validationrules={{
                    equalTo: 'password', //TODO
                }}
            />
            <input
                style={{ display: 'none' }}
                id="button-submit"
                multiple
                type="submit"
                // TODO add submit target
            />
            <label htmlFor="button-submit">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className={formClasses.submit}
                >
                    Update Password
                </Button>
            </label>
        </form>
    )
}

export default UpdatePasswordForm;