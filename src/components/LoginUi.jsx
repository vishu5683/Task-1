import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Pic1 from './assets/pic1.png';
import './LogUi.css';

const LoginUi = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (email === 'vishu@gmail.com' && password === 'vishu123') {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={Pic1} alt="Login" className="login-image" />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Email address
          </label>
          <input
            type="email"
            className="form-control box"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ex: Vishu@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter Your Password
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control box"
              id="exampleInputPassword1"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="mb-3 forgot-password">
          <p onClick={() => navigate("/forgot-password")} >
            Forgot Password
          </p>
        </div>
        <button type="submit" className="btn btn-primary login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginUi;
