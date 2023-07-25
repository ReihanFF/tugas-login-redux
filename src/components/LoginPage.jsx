import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../store/actions';

const LoginPage = ({ handleLoginSuccess }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginRequest());

    //ini saya pake dummy data karena saya masih bingung login pake api nya
    if (username === '123' && password === '123') {
      const userData = {
        id: 1,
        username: '123',
        email: '123@example.com',
      };
      dispatch(loginSuccess(userData));
      handleLoginSuccess();
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };

  

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br/>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
