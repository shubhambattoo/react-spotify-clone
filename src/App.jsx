import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div>{token ? <>My App</> : <Login />}</div>;
}

export default App;
