
import React, { useState } from 'react';
import { signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-toastify';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TextField, Button } from '@mui/material';
import '../Styles/PhoneLogin.css';
import { useNavigate } from 'react-router-dom';

const TestFirebase = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

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
      const data = await user.confirm(otp);
      console.log(data);
      toast.success('User login successful!', { position: 'top-center' });

      // Set authentication state
      localStorage.setItem('isLoggedIn', true);


      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error(err.message, { position: 'bottom-center' });
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
        <TextField onChange={(e) => setOtp(e.target.value)} label="Enter OTP" />
        <br />
        <Button onClick={verifyOtp} variant="contained">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default TestFirebase;
