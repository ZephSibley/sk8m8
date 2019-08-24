import React from 'react';
import Button from '@material-ui/core/Button'

import formStyles from '../../../styles/forms';
import ValidInput from '../ValidInput';

const SignupForm = () => {
    const formClasses = formStyles();

    const signupHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        console.log('signup!')
    };

    return (
        <form className={formClasses.form}>
            <ValidInput
                label='email'
                validationrules={{
                    isEmail: true,
                }}
            />
            <ValidInput
                label='confirm email'
                validationrules={{
                    equalTo: 'email', // TODO: configure equalTo
                }}
                controlvalue={''}
            />
            <ValidInput
                label='username'
                validationrules={{
                    minLength: 3,
                }}
            />
            <ValidInput
                label='password'
                validationrules={{
                    minLength: 6
                }}
            />
            <ValidInput
                label='confirm password'
                validationrules={{
                    equalTo: 'password'
                }}
                controlvalue={''}
            />
            <input
                style={{ display: 'none' }}
                id="outlined-button-submit"
                multiple
                type="submit"
            />
            <label htmlFor="outlined-button-file">
                <Button
                    variant="outlined"
                    color="primary"
                    component="span"
                    className={formClasses.submit}
                    onClick={(e) => signupHandler(e)}
                >
                    Sign up
              </Button>
            </label>
        </form>
    )
}

export default SignupForm;