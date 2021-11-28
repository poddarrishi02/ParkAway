import React from 'react';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import styles from '../styles/otpVerif.module.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
// import axios from "axios";

function OtpVerif() {
    const [otp, setotp] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        // axios.post("http://localhost:8080/adminlogin", adminData)
        // 	.then((res) => {
        // 		alert(res);
        // 	})
        // 	.catch((err) => {
        // 		alert(err);
        // 	});
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.otp}>OTP Verification</h1>
            <div className={styles.msgbox}>
                <h3 className={styles.msg}>We've sent a verification code to your email.</h3>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <TextField
                    fullWidth
                    maxWidth="sm"
                    required
                    id="outlined-required"
                    label="Enter OTP"
                    defaultValue=""
                    style={{ width: "30vw", marginTop: "2vh" }}
                    value={otp}
                    onChange={(e) => {
                        setotp(e.target.value);
                    }}
                />
                <Button style={{ width: "30vw", marginTop: "4vh" }} variant="contained" type="submit">Verify</Button>
            </form>
        </div>
    )
}

export default OtpVerif

