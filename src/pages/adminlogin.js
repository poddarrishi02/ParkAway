import React from "react";
import styles from "../styles/stafflogin.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Adminlogin({ access, setAcess }) {
	const history = useHistory();
	

	const [adminData, setAdminData] = useState({ userName: "", password: "" });
	const handleSubmit = async (e) => {
		e.preventDefault();
		if ( !(adminData.userName === "") && !(adminData.password === "")) {
			axios
				.post("http://localhost:8080/adminlogin", adminData)
				.then((res) => {
					setAcess({ ...access, admin: true });
					history.push("/dashboard");
				})
				.catch((err) => {
					alert(err.response.data);
				});
		}
	};
	return (
		<>
			<div className={styles.container}>
				<form className={styles.boxForm} onSubmit={(e) => handleSubmit(e)}>
					<div className={styles.heading}>
						<h2>Admin Login</h2>
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
								value={adminData.userName}
								error={adminData.userName ? false : true}
								helperText={adminData.userName ? "" : "Username is Required !"}
								onChange={(e) =>
									setAdminData({ ...adminData, userName: e.target.value })
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
								value={adminData.password}
								error={adminData.password ? false : true}
								helperText={adminData.password ? "" : "Password is Required !"}
								onChange={(e) =>
									setAdminData({ ...adminData, password: e.target.value })
								}
							/>
						</div>
						<div className={styles.inputsRemember}>
							<input type="checkbox" name="remember" id="remember"></input>
							<label for="remember">Remember me</label>
						</div>
						<Button variant="contained" className={styles.submit} type="submit">
							Sign in
						</Button>
					</div>
					<div className={styles.breakLine}></div>
				</form>
			</div>
		</>
	);
}

export default Adminlogin;
