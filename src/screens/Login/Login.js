import React from 'react';
import './login.css';
import eyeOpen from '../../images/eye.svg';

const Login = () => {
  return (
    <div className='login-container'>
        <h1 className='heading'>Venue Admin Login</h1>
        <div className='input-box'>
            <input className='login-input' type='text' placeholder='Username'/>
        </div>
        <div className='input-box'>
            <input className='login-input' type='text' placeholder='Password'/>
            <img className='eyeImg' src={eyeOpen} />
        </div>

        <button className='btn'>Sign in</button>
        <p>New Registration ?</p>
    </div>
  )
}

export default Login