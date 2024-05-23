import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Pic1 from './assets/pic1.png';
import './LogUi.css';
import Toast, { notifySuccess, notifyError } from '../components/Toast';

const LoginUi = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        localStorage.setItem('token', data.token); // Save the token
        notifySuccess('Login successful!');
        navigate('/dashboard');
      } else {
        notifyError('Invalid username or password. Please try again.');
      }
    })
    .catch(error => {
      notifyError('Invalid username or password. Please try again.');
      console.error('Error:', error);
    });
  };

  // Testing Toast Notifications
  // const testSuccessNotification = () => {
  //   notifySuccess('This is a success message!');
  // };

  // const testErrorNotification = () => {
  //   notifyError('This is an error message!');
  // };

  return (
    <div className="login-container">
      <Toast />
      <img src={Pic1} alt="Login" className="login-image" />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            Enter Your Username
          </label>
          <input
            type="text"
            className="form-control box"
            id="exampleInputUsername1"
            aria-describedby="usernameHelp"
            placeholder="Ex: kminchelle"
            value={username}
            onChange={handleUsernameChange}
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
          <p onClick={() => navigate("/forgot-password")}>
            Forgot Password
          </p>
        </div>
        <button type="submit" className="btn btn-primary login-button">
          Login
        </button>
        {/* Test Buttons for Toast Notifications */}
        {/* <button type="button" onClick={testSuccessNotification} className="btn btn-success">
          Test Success Notification
        </button>
        <button type="button" onClick={testErrorNotification} className="btn btn-danger">
          Test Error Notification
        </button> */}
      </form>
    </div>
  );
};

export default LoginUi;
