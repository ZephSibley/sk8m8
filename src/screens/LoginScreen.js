import React from 'react';

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
        </div>
      );
};

export default LoginScreen;