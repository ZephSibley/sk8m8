import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import '../styles/screens.css'
import formStyles from '../styles/forms';
import ValidInput from '../components/ui/ValidInput';

const LoginScreen = () => {
  const formClasses = formStyles()

  const loginHandler = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    console.log('login')
  }

  const signupHandler = () => {
    console.log('signup')
  }

  return (
    <div className={'screen'}>
      <h1>S K 8 M 8</h1>
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
            onClick={() => loginHandler()}
          >
            Log in
          </Button>
        </label>
      </form>
      <Link 
        to='/signup'
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="outlined"
          color="primary"
          component="span"
        >
          Sign up
        </Button>
      </Link>
    </div>
  );
};

export default LoginScreen;