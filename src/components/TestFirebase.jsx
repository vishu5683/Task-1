import React, { useState, useRef } from 'react';
import { signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-toastify';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Button } from '@mui/material';
import '../Styles/PhoneLogin.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../containers/auth/authSlice';

const TestFirebase = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store OTP digits
  const otpFields = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const reCaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, reCaptcha);
      setUser(confirmation);
      console.log(confirmation);
      toast.success('OTP sent', { position: 'top-center' });
    } catch (err) {
      console.error(err);
      toast.error(err.message, { position: 'bottom-center' });
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const otpValue = otp.join(''); // Join the array to form OTP string
      const data = await user.confirm(otpValue);
      console.log(data);
      toast.success('User login successful!', { position: 'top-center' });

      // Dispatch action to update Redux state with phone number
      dispatch(loginSuccess({ username: 'User:', phoneNumber }));

      // Set authentication state
      localStorage.setItem('isLoggedIn', true);

      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error(err.message, { position: 'bottom-center' });
    }
  };

  const handleKeyPress = (index, e) => {
    // Move focus to the previous input field if backspace is pressed and the current field is empty
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpFields.current[index - 1].focus();
    }
  };

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field
    if (value !== '' && index < otp.length - 1) {
      otpFields.current[index + 1].focus();
    }
  };

  return (
    <div id="login">
      <div className="phone-container">
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber('+' + phoneNumber)}
        />
        <Button onClick={sendOtp} variant="contained">
          Send OTP
        </Button>
        <div id="recaptcha"></div>
        <br />
        {/* Label for OTP input fields */}
        <div className="otp-label">
          <p>Enter OTP:</p>
        </div>
        {/* Modified OTP input field */}
        <div className="otp-field">
          {otp.map((digit, index) => (
            <div className="otp-box" key={index}>
              <input
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyPress={(e) => handleKeyPress(index, e)}
                ref={(input) => (otpFields.current[index] = input)}
              />
            </div>
          ))}
        </div>
        <br />
        <Button onClick={verifyOtp} variant="contained">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default TestFirebase;
