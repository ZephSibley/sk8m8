import React from 'react';

const LoginScreen = () => {

    const loginHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
      }
      
      const signupHandler = () => {
        this.props.navigation.navigate('Signup');
      }

      return (
        <div>login</div>
      );
};

export default LoginScreen;