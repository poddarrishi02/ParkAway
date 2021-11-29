import React from "react";
import styles from "../styles/usernew.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// Button
function Staffnew() {
	const [staffData, setStaffData] = useState({
		name: "",
		userName: "",
		password: "",
		address: "",
		phone: "",
		email: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8080/staffnew", staffData)
			.then((res) => {
				alert(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
			setStaffData({
				name: "",
				userName: "",
				password: "",
				address: "",
				phone: "",
				email: ""
			})
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.welcomeOuter}>
					<p className={styles.welcome}>Welcome to</p>
					<h1 className={styles.welcome}>Car Booking Service</h1>
				</div>
				<div className={styles.rightCol}>
					<div className={styles.heading}>
						<h2>Staff Registration</h2>
					</div>
					<div className={styles.breakLine}></div>
					<form className={styles.boxForm} onSubmit={(e) => handleSubmit(e)}>
						<div className={styles.boxInputs}>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									required
									id="outlined-required"
									label="Full Name"
									defaultValue=""
									value={staffData.name}
									onChange={(e) =>
										setStaffData({ ...staffData, name: e.target.value })
									}
								/>
							</div>
							{/* <div className={styles.pw}>
                                <TextField
                                    fullWidth
                                    maxWidth="sm"
                                    required
                                    id="outlined-required"
                                    label="Last name"
                                    defaultValue=""
                                />
                            </div> */}
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									required
									id="outlined-required"
									label="Username"
									defaultValue=""
									value={staffData.userName}
									onChange={(e) =>
										setStaffData({ ...staffData, userName: e.target.value })
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
									required
									value={staffData.password}
									onChange={(e) =>
										setStaffData({ ...staffData, password: e.target.value })
									}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									id="outlined-password-input"
									label="Confirm Password"
									type="password"
									autoComplete="current-password"
									required
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									id="outlined-textarea"
									label="Residential Address"
									multiline
									required
									value={staffData.address}
									onChange={(e) =>
										setStaffData({ ...staffData, address: e.target.value })
									}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									id="outlined-password-input"
									label="Email ID"
									type="email"
									autoComplete="current-password"
									required
									value={staffData.email}
									onChange={(e) =>
										setStaffData({ ...staffData, email: e.target.value })
									}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									required
									id="outlined-required"
									label="Mobile number"
									defaultValue=""
									value={staffData.phone}
									onChange={(e) =>
										setStaffData({ ...staffData, phone: e.target.value })
									}
								/>
							</div>
							<Button
								type="submit"
								variant="contained"
								className={styles.submit}
								className={styles.btn}
							>
								Register
							</Button>
						</div>
						<div className={styles.reg}>
							Already registered? &nbsp;
							<Link to="/staff" style={{ textDecoration: "none" }}>
								<a href="#">Sign in</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Staffnew;
