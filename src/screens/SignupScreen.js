import React from 'react';

import '../styles/screens.css';
import BackButton from '../components/ui/nav/BackButton';
import SignupForm from '../components/ui/forms/SignupForm';

const axios = require('axios');

const SignupScreen = () => {

    return (
        <div className={'form-screen'}>
            <BackButton />
            <h1>S K 8 M 8</h1>
            <SignupForm requests={axios} />
            <div style={{marginBottom: 100}}></div>
        </div>
    );
}

export default SignupScreen