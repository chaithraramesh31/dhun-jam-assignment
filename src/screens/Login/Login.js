import React, { useState } from 'react';
import './login.css';
import eyeOpen from '../../images/eye.svg';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../stores/utils/thunks';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const userDetails = {username, password};
    dispatch(adminLogin(userDetails))
  }

  return (
    <form className='login-container' onSubmit={handleLogin}>
        <h1 className='heading'>Venue Admin Login</h1>
        <div className='input-box'>
            <input className='input-field' type='text' placeholder='Username' required
            value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='input-box'>
            <input className='input-field' type='text' placeholder='Password' required
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            <img className='eyeImg' src={eyeOpen} alt='eye'/>
        </div>
        <input type='submit' value='Sign in' className='btn'/>
        <p>New Registration ?</p>
    </form>
  )
}

export default Login