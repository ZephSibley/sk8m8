import React from 'react';

const SignupScreen = () => {

    const signUpHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main')
      };

    return (
        <div>signup</div>
    );
}

export default SignupScreen