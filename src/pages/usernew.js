import React from "react";
import styles from "../styles/usernew.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// Button
function Usernew() {
	const history = useHistory();
	const [userData, setUserData] = useState({
		name: "",
		userName: "",
		password: "",
		address: "",
		phone: "",
		email: "",
		car_no: "",
	});

	const [error, setError] = useState({
		name: "",
		userName: "",
		password: "",
		address: "",
		phone: "",
		email: "",
		car_no: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		userData.name
			? setError({ ...error, name: "" })
			: setError({ ...error, name: "Name is required" });
		userData.userName
			? setError({ ...error, userName: "" })
			: setError({ ...error, userName: "User Name is required" });
		userData.password
			? setError({ ...error, password: "" })
			: setError({ ...error, password: "Password is required" });
		userData.address
			? setError({ ...error, address: "" })
			: setError({ ...error, address: "Address is required" });
		userData.phone
			? setError({ ...error, phone: "" })
			: setError({ ...error, phone: "Phone is required" });
		userData.email
			? setError({ ...error, email: "" })
			: setError({ ...error, email: "Email is required" });
		userData.car_no
			? setError({ ...error, car_no: "" })
			: setError({ ...error, car_no: "Car Number is required" });

		if (
			userData.name != "" && userData.userName != "" && userData.password != "" && userData.address != "" && userData.phone != "" && userData.email != "" && userData.car_no != "")
			{
				history.pusg({
					pathname:"/verify",
					state: userData
				})			
			}
		setUserData({
			name: "",
			userName: "",
			password: "",
			address: "",
			phone: "",
			email: "",
			car_no: "",
		});
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
						<h2>User Registration</h2>
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
									error={error.name}
									value={userData.name}
									onChange={(e) =>
										setUserData({ ...userData, name: e.target.value })
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
									error={error.userName}
									id="outlined-required"
									label="Username"
									defaultValue=""
									value={userData.userName}
									onChange={(e) =>
										setUserData({ ...userData, userName: e.target.value })
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
									error={error.password}
									value={userData.password}
									onChange={(e) =>
										setUserData({ ...userData, password: e.target.value })
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
									error={error.address}
									value={userData.address}
									onChange={(e) =>
										setUserData({ ...userData, address: e.target.value })
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
									error={error.email}
									autoComplete="current-password"
									required
									value={userData.email}
									onChange={(e) =>
										setUserData({ ...userData, email: e.target.value })
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
									error={error.mobile}
									value={userData.phone}
									onChange={(e) =>
										setUserData({ ...userData, phone: e.target.value })
									}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									required
									id="outlined-required"
									error={error.city}
									label="Car Registration Number"
									defaultValue=""
									value={userData.car_no}
									onChange={(e) =>
										setUserData({ ...userData, car_no: e.target.value })
									}
									style={{ marginBottom: "2em" }}
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
							<Link to="/user" style={{ textDecoration: "none" }}>
								<a href="#">Sign in</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Usernew;
