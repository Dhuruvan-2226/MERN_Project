import React from 'react';
import './ALoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ALoginForm = () => {
  const navigate = useNavigate();
  const handleWelcomeBack = () => {
    navigate("/a-dashboard");
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
            <p>New Here? <Link to="/a-signup">Create an Account!</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ALoginForm;
