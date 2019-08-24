import React from 'react';
import Button from '@material-ui/core/Button';

import formStyles from '../../../styles/forms';
import ValidInput from '../ValidInput';

const LoginForm = () => {
    const formClasses = formStyles();

    const loginHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        console.log('login')
    }
    
    return (
        <form className={formClasses.form}>
            <ValidInput
                label='username'
                validationrules={{
                    minLength: 3,
                }}
            />
            <ValidInput
                label='password'
                validationrules={{
                    minLength: 6,
                }}
            />
            <input
                style={{ display: 'none' }}
                id="button-submit"
                multiple
                type="submit"
            />
            <label htmlFor="button-submit">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className={formClasses.submit}
                    onSubmit={e => loginHandler(e)}
                >
                    Log in
          </Button>
            </label>
        </form>
    )
}

export default LoginForm;