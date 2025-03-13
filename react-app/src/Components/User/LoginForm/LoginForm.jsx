import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleWelcomeBack = () => {
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='Username/Email' required></input>
            <FaUser className='icon' />
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' required></input>
            <FaLock className='icon' />
        </div>
        <div className="forgot">
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" onClick={handleWelcomeBack}>Welcome Back</button>
        <div className="register-link">
            <p>New Here? <Link to="/signup">Create an Account!</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
