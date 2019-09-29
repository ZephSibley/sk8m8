import React from 'react';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import ValidInput from '../ValidInput';

const UpdateEmailForm = () => {
    const formClasses = formStyles();
    
    return (
        <form className={formClasses.form}>
            <ValidInput
                label='email'
                validationrules={{
                    isEmail: true,
                }}
            />
            <ValidInput
                label='password'
                validationrules={{
                    equalTo: 'email', //TODO
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
                    Update Email
                </Button>
            </label>
        </form>
    )
}

export default UpdateEmailForm;