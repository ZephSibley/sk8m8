import React from 'react';
import Button from '@material-ui/core/Button';

import formStyles from '../styles/forms';
import ValidInput from '../components/ui/ValidInput';

const SignupScreen = () => {
    const formClasses = formStyles()

    const signUpHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main')
    };

    return (
        <div>
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
                    controlValue={}
                />
                <ValidInput
                    label='username'
                    validationrules={{
                        isUsername: true,
                    }}
                />
                <ValidInput
                    label='password'
                    validationrules={{
                        isPassword: true
                    }}
                />
                <ValidInput
                    label='confirm password'
                    validationrules={{
                        equalTo: 'password'
                    }}
                    controlValue={}
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
                    >
                        Sign up
              </Button>
                </label>
            </form>
        </div>
    );
}

export default SignupScreen