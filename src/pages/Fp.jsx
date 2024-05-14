import React from 'react'
import { Link } from 'react-router-dom';

const Fp = () => {
  return (
    <div className="forgot-password-container">
    <h1>Forgot Password?</h1>
    <p>Don't worry! We've got you covered.</p>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" className="form-control" placeholder="Enter your email" />
      </div>
      <button type="submit" className="btn btn-primary">Reset Password</button>
    </form>
    <p>Remember your password? <Link to="/">Sign in here</Link>.</p>
    <img src="https://via.placeholder.com/150" alt="Password Reset" />
  </div>
  )
}

export default Fp
