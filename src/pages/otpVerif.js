import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import styles from '../styles/otpVerif.module.css'
import { Link } from 'react-router-dom';
function OtpVerif() {
    return (
        <div className={styles.container}>
            <h1 className={styles.otp}>OTP Verification</h1>
            <div className={styles.msgbox}>
                <h3 className={styles.msg}>We've sent a verification code to your email.</h3>
            </div>
            <TextField
                fullWidth
                maxWidth="sm"
                required
                id="outlined-required"
                label="Enter OTP"
                defaultValue=""
                style={{ width: "30vw", marginTop: "2vh" }}
            />
            <Button style={{ width: "30vw", marginTop: "4vh" }} variant="contained" className={styles.submit} className={styles.btn} >Verify</Button>
        </div>
    )
}

export default OtpVerif
