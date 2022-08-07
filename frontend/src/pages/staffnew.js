import React from "react";
import styles from "../styles/usernew.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Button
function Staffnew() {
	const navigate = useNavigate();
	const [staffData, setStaffData] = useState({
		name: "",
		userName: "",
		password: "",
		address: "",
		phone: "",
		email: "",
	});

	const [tempPass, setTempPass] = useState("");
	const [error, setError] = useState({
		username: false,
		pass: false,
	});

const handleSubmit = async (e) => {
		e.preventDefault();
		if (!(tempPass === staffData.password)) setError({ ...error, pass: true });
		await axios
			.post("http://localhost:8080/staffnew/staffnamecheck", staffData)
			.then((res) => {
				console.log(res.data);
				if (res.data === false) setError({ ...error, username: true });
			});

		if (error.pass === false && error.username === false && staffData.password != "" && staffData.userName != "") {
			axios.post("http://localhost:8080/staffnew/addstaff", staffData)
			.then((res) => {navigate("/");});
		}
	};
	return (
		<>
			<div className={styles.outer}>
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
									
									id="outlined-required"
									label="Full Name"
									defaultValue=""
									value={staffData.name}
									onChange={(e) =>
										setStaffData({ ...staffData, name: e.target.value })
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
									error={error.username}
									helperText={error.username ? "Username already taken" : "" }
									value={staffData.userName}
									onChange={(e) =>
										{
										setStaffData({ ...staffData, userName: e.target.value })
										setError({ ...error, username: false });
										}
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
									error={staffData.password?false:true}
									helperText={staffData.password?"":"Password is required."}
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
									error={tempPass === staffData.password ? false : true}
									helperText={
										tempPass === staffData.password
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
						<div className={styles.reg}>
                            <Link to="/" style={{   textDecoration: "none" }}><a href="#" >Back To Homepage</a></Link>
                        </div>
					</form>
				</div>
			</div>
			</div>
		</>
	);
}

export default Staffnew;
