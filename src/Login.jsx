import React from 'react';
import './Login.css';
import { loginURL } from './spotify';

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="Spotify Logo"
      />
      <a href={loginURL}>Login with Spotify</a>
    </div>
  );
};

export default Login;
