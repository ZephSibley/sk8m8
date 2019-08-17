import React from 'react';
import Button from '@material-ui/core/Button';

import '../styles/screens.css'
import formStyles from '../styles/forms';
import ValidInput from '../components/ui/ValidInput';

const SignupScreen = () => {
    const formClasses = formStyles()

    const signupHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        console.log('signup!')
    };

    return (
        <div className={'screen'}>
            <h1>S K 8 M 8</h1>
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
                        onClick={() => signupHandler()}
                    >
                        Sign up
              </Button>
                </label>
            </form>
        </div>
    );
}

export default SignupScreen