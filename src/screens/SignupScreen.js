import React from 'react';

import '../styles/screens.css';
import SignupForm from '../components/ui/forms/SignupForm';

const axios = require('axios');

const SignupScreen = () => {

    return (
        <div className={'form-screen'}>
            <h1>S K 8 M 8</h1>
            <SignupForm requests={axios} />
        </div>
    );
}

export default SignupScreen