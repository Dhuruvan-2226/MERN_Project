import React from 'react';
import './ASignup.css';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ASignup = () => {
  const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/a-login");
    };
  return (
    <div className="signup-container">
    <div class="wrapper">
          <form action="">
            <h1>Signup</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required></input>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="email" placeholder='Email' required></input>
                <MdEmail className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required></input>
                <FaLock className='icon' />
            </div>
            <button type="submit" onClick={handleGetStarted}>Get Started</button>
            <div className="register-link">
                <p>Got an Account? <Link to="/a-login">Access it now!</Link></p>
            </div>
          </form>
        </div>
        </div>
  );
}

export default ASignup;
