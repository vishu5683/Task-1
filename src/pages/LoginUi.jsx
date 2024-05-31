import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Pic1 from './assets/pic1.png';
import './LogUi.css';
import Toast, { notifySuccess, notifyError } from '../components/Toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { loginSuccess } from '../containers/auth/authSlice';

const LoginUi = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // Get auth state from Redux

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          console.log('Redux State before login:', auth); // Log state before login
          dispatch(loginSuccess({ username: data.username, token: data.token }));
          console.log('Redux State after login:', auth); // Log state after login
          notifySuccess('Login successful!');
          navigate('/dashboard');
        } else {
          notifyError('Invalid username or password. Please try again.');
        }
      })
      .catch((error) => {
        notifyError('Invalid username or password. Please try again.');
        console.error('Error:', error);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <Toast />
      <img src={Pic1} alt="Login" className="login-image" />
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Enter Your Username
          </label>
          <input
            type="text"
            className={`form-control box ${errors.username ? 'is-invalid' : ''}`}
            id="username"
            placeholder="Ex: kminchelle"
            {...register('username')}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control box ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="********"
              {...register('password')}
            />
            <span className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
        </div>
        <div className="mb-3 forgot-password">
          <p onClick={() => navigate('/forgot-password')}>
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
