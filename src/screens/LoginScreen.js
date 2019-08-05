

LoginScreen = () => {

    loginHandler = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
      }
      
      signupHandler = () => {
        this.props.navigation.navigate('Signup');
      }

      return (
        pass
      );
};

export default LoginScreen;