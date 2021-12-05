import React from "react";
import styles from "../styles/usernew.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Button
function Usernew() {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		name: "",
		userName: "",
		password: "",
		address: "",
		phone: "",
		email: "",
		car_no: "",
	});
	const [tempPass, setTempPass] = useState("");
	const [error, setError] = useState({
		username: false,
		pass: false,
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!(tempPass === userData.password)) setError({ ...error, pass: true });
		await axios
			.post("http://localhost:8080/usernew/usernamecheck", userData)
			.then((res) => {
				console.log(res.data);
				if (res.data === false) setError({ ...error, username: true });
			});

		if (error.pass === false && error.username === false && userData.password != "" && userData.userName != "") {
			localStorage.setItem("userData", JSON.stringify(userData));
			// history.push("/verify");
			navigate("/verify");
		}
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
									id="outlined-required"
									label="Full Name"
									variant="outlined"
									defaultValue=""
									value={userData.name}
									onChange={(e) =>
										setUserData({ ...userData, name: e.target.value })
									}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									id="outlined-required"
									label="Username"
									defaultValue=""
									value={userData.userName}
									error={error.username}
									helperText={error.username ? "Username already taken" : "" }
									onChange={(e) => {
										setUserData({ ...userData, userName: e.target.value });
										setError({ ...error, username: false });
									}}
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
									value={userData.password}
									error={userData.password?false:true}
									helperText={userData.password?"":"Password is required."}
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
									error={tempPass === userData.password ? false : true}
									helperText={
										tempPass === userData.password
											? ""
											: "Paswords Do Not Match"
									}
									value={tempPass}
									onChange={(e) => setTempPass(e.target.value)}
								/>
							</div>
							<div className={styles.pw}>
								<TextField
									fullWidth
									maxWidth="sm"
									id="outlined-textarea"
									label="Residential Address"
									multiline
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
									autoComplete="current-password"
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
									id="outlined-required"
									label="Mobile number"
									defaultValue=""
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
									id="outlined-required"
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
						<div className={styles.reg}>
                            <Link to="/" style={{   textDecoration: "none" }}><a href="#" >Back To Homepage</a></Link>
                        </div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Usernew;
