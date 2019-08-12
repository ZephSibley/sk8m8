import React from 'react';
import Button from '@material-ui/core/Button';

import ValidInput from '../components/ui/ValidInput';

const LoginScreen = () => {

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
      <form>
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
          accept="image/*"
          style={{display: 'none'}}
          id="outlined-button-submit"
          multiple
          type="submit"
        />
        <label htmlFor="outlined-button-file">
          <Button
            variant="outlined"
            color="primary"
            component="span"
          >
            Log in
          </Button>
        </label>
      </form>
    </div>
  );
};

export default LoginScreen;