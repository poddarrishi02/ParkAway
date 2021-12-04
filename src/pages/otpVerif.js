import React from "react";
import { TextField } from "@mui/material";
import { Box, Typography, Link } from "@material-ui/core";
import Button from "@mui/material/Button";
import styles from "../styles/otpVerif.module.css";
// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OtpVerif() {
	const [otp, setotp] = useState("");
	const [verify, setVerify] = useState("");
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
	const navigate = useNavigate();

	useEffect(() => {
        axios.post("http://localhost:8080/verify", userData.email).then((res) => {
            setVerify(res.data);
		});
	}, []);

    const emailSender = () => {
        axios.post("http://localhost:8080/verify", userData.email).then((res) => {
			setVerify(verify, res.data);
		});
    }

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(verify);
		console.log(otp);
		if (otp == verify) {
			localStorage.clear();
			axios
				.post("http://localhost:8080/usernew/adduser", userData)
				.then((res) => {navigate("/");});

		} 
        else {
			setotp("");
			alert("Wrong OTP");
			window.location.replace("/verify");
		}
	};

	const totaltime = 119;
	const [counter, setCounter] = React.useState(totaltime);

	useEffect(() => {
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	return (
		<div className={styles.container}>
			<h1 className={styles.otp}>OTP Verification</h1>
			<div className={styles.msgbox}>
				<h3 className={styles.msg}>
					We've sent a verification code to your email.
				</h3>
			</div>
			<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
				<TextField
					fullWidth
					maxWidth="sm"
					required
					id="outlined-required"
					label="Enter OTP"
					defaultValue=""
					style={{ width: "30vw", marginTop: "2vh" }}
					value={otp}
					onChange={(e) => {setotp(e.target.value)}}
					disabled={counter == 0 ? true : false}
				/>
				<Button
					style={{ width: "30vw", marginTop: "4vh" }}
					variant="contained"
					type="submit"
					onSubmit={(e) => handleSubmit(e)}
				>
					Verify
				</Button>
				<Box mt={3}>
					<Typography fontWeight={500} align="center" color="textSecondary">
						{" "}
						Resend OTP in{" "}
						<span style={{ color: "green", fontWeight: "bold" }}>
							{" "}
							{counter} s
						</span>{" "}
					</Typography>
				</Box>
				{counter == 0 && (
					<Button
						variant="contained"
						onClick={() => {
							setCounter(totaltime)
							emailSender();
						}}
					>
						Resend OTP
					</Button>
				)}
			</form>
		</div>
	);
}

export default OtpVerif;
