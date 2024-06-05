import { signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from '../firebase/firebase';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { TextField, Button } from '@mui/material';

const Loginfor = () => {
    const [phonenumber, setPhonenumber] = useState('');
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");
    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            const reCaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phonenumber, reCaptcha)

            setUser(confirmation);
            console.log(confirmation);
            toast.success("OTP sent", {
                position: "top-center"
            })
        }
        catch (err) {
            console.log(err);
            toast.success(err.message, {
                position: "bottom-center"
            })
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const data = await user.confirm(otp)
            console.log(data);
            toast.success("user login  successfull!", {
                position: "top-center"
            })
        }
        catch (err) {
            console.log(err);
            toast.success(err.message, {
                position: "bottom-center"
            })
        }

    }
    return (
        <div id='login'>
            <div className='phone-container'>
                <PhoneInput
                    country={'in'}
                    value={phonenumber}
                    onChange={(phonenumber) => setPhonenumber('+' + phonenumber)}
                />
                <Button onClick={sendOtp} variant='contained'>send otp</Button>
                <div id="recaptcha" style={{ marginLeft: '40rem' }}></div>
                <br />
                <TextField onChange={e => setOtp(e.target.value)} label='Enter otp' />
                <br />
                <Button onClick={verifyOtp} variant='contained'>Verify</Button>
            </div>

        </div>
    )
}

export default Loginfor