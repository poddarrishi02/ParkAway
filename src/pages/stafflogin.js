import React, { useState } from "react";
import styles from "../styles/stafflogin.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";

import { useNavigate } from 'react-router';

function Stafflogin({access, setAccess}) {
	const [staff, setStaff] = useState({ userName: "", password: "" });
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/staff", staff)
			.then((res) => {
				if (res.data) {
					setAccess({ ...access, staff: true });
					// history.push("/dashboard");
					console.log(staff.userName);
					navigate("/dashboard");
				}
				else 
				{
					alert("Wrong Credentials !!! try again .... ");
				}
			})
			.catch((err) => {
				alert(err);
			});
	};

	return (
		<>
		    <div className={styles.outer}>
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

						<Button type="submit" variant="contained" className={styles.submit}>
							Sign in
						</Button>
					</div>
					<div className={styles.breakLine}></div>
					<div className={styles.reg}>
						<Link to="/staffnew" style={{ textDecoration: "none" }}>
							<a href="#">Create an Account</a>
						</Link>
					</div>
					<div className={styles.reg}>
                            <Link to="/" style={{  fontWeight: "bolder", textDecoration: "none" }}><a href="#" >Back To Homepage</a></Link>
                        </div>
				</form>
			</div>
			</div>
			<div class="country-wrap">
                <div class="street">
                    <div class="car">
                        <div class="car-body">
                            <div class="car-top-back">
                                <div class="back-curve"></div>
                            </div>
                            <div class="car-gate"></div>
                            <div class="car-top-front">
                                <div class="wind-sheild"></div>
                            </div>
                            <div class="bonet-front"></div>
                            <div class="stepney"></div>
                        </div>
                        <div class="boundary-tyre-cover">
                            <div class="boundary-tyre-cover-back-bottom"></div>
                            <div class="boundary-tyre-cover-inner"></div>
                        </div>
                        <div class="tyre-cover-front">
                            <div class="boundary-tyre-cover-inner-front"></div>
                        </div>
                        <div class="base-axcel">
                        </div>
                        <div class="front-bumper"></div>
                        <div class="tyre">
                            <div class="gap"></div>
                        </div>
                        <div class="tyre front">
                            <div class="gap"></div>
                        </div>
                        <div class="car-shadow"></div>
                    </div>
                </div>
                <div class="street-stripe"></div>
            </div>
		</>
	);
}

export default Stafflogin;
