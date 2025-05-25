import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';


const handleLogin = async () => {
console.log("Attempting to login with", { email, password });
try {
  const data = await login(email, password);
  console.log("Login successful", data);
} catch (err) {
  console.error("Login failed", err);
}
};


const LoginForm = () => {
    return (
        <div className = 'wrapper'>
            <form action = ''>
                <h1>Login</h1>
                <div className = 'input-box'>
                    <input type = 'text' placeholder='Email' required />
                    <FaUser className='icon' />
                </div>
                <div className = 'input-box'>
                    <input type = 'password' placeholder='Password' required />
                     <FaLock className='icon' />
                </div>
                <button type = 'submit' onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};


export default LoginForm;

