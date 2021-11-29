import React, { useState } from "react";
import styles from "../styles/stafflogin.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
function Stafflogin() {
	const [staff, setStaff] = useState({ userName: "", password: "" });
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/staff", staff)
			.then((res) => {
				alert(res.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
		setStaff({ userName: "", password: "" });
	};

	return (
		<>
			<div className={styles.container}>
				<form className={styles.boxForm} onSubmit={(e) => handleSubmit(e)}>
					<div className={styles.heading}>
						<h2>Staff Login</h2>
					</div>
					<div className={styles.boxInputs}>
						<div className={styles.pw}>
							<TextField
								fullWidth
								maxWidth="sm"
								id="outlined-password-input"
								label="Username"
								type="text"
								autoComplete="current-password"
								value={staff.userName}
								onChange={(e) =>
									setStaff({ ...staff, userName: e.target.value })
								}
							/>
						</div>
						<div className={styles.pw}>
							<TextField
								fullWidth
								maxWidth="sm"
								id="outlined-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								value={staff.password}
								onChange={(e) =>
									setStaff({ ...staff, password: e.target.value })
								}
							/>
						</div>
						<div className={styles.inputsRemember}>
							<input type="checkbox" name="remember" id="remember"></input>
							<label for="remember">Remember me</label>
						</div>
						<Button type="submit" variant="contained" className={styles.submit}>
							Sign in
						</Button>
					</div>
					<div className={styles.reg}>
						<Link to="/staffnew" style={{ textDecoration: "none" }}>
							<a href="#">Create an Account</a>
						</Link>
					</div>
					<div className={styles.breakLine}></div>
				</form>
			</div>
		</>
	);
}

export default Stafflogin;
