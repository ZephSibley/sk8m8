import React from 'react';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

import '../styles/screens.css';
import frontVideo from '../assets/img/front_video_3.mp4';
import slowNetwork from '../utils/browser/slowNetwork';
import LoginForm from '../components/ui/forms/LoginForm';

const axios = require('axios')

const LoginScreen = () => {

  return (
    <div className={'form-screen'}>
      <video autoPlay muted className='video-background'>
        <source src={slowNetwork() ? '' : frontVideo} type='video/mp4' />
      </video>
      <h1>S K 8 M 8</h1>

      <LoginForm requests={axios} />

      <p>No account?</p>
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