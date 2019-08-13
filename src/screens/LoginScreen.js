import React from 'react';
import Button from '@material-ui/core/Button';

import formStyles from '../styles/forms';
import ValidInput from '../components/ui/ValidInput';

const LoginScreen = () => {
  const formClasses = formStyles()

  const loginHandler = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  }

  const signupHandler = () => {
    this.props.navigation.navigate('Signup');
  }

  return (
    <div>
      <h1>S K 8 M 8</h1>
      <form className={formClasses.form}>
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
            Log in
          </Button>
        </label>
      </form>
    </div>
  );
};

export default LoginScreen;