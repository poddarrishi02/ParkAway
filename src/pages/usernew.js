import React from 'react'
import styles from '../styles/usernew.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Button
function Usernew() {
    // function checkPassword() {
    //     let password = document.getElementById("password").value;
    //     let cnfrmPassword = document.getElementById("cnfrm-password").value;
    //     console.log(" Password:", password, '\n', "Confirm Password:", cnfrmPassword);
    //     let message = document.getElementById("message");

    //     if (password.length != 0) {
    //         if (password == cnfrmPassword) {
    //             message.textContent = "Passwords match";
    //             message.style.backgroundColor = "#1dcd59";
    //         }
    //         else {
    //             message.textContent = "Password don't match";
    //             message.style.backgroundColor = "#ff4d4d";
    //         }
    //     }
    //     else {
    //         alert("Password can't be empty!");
    //         message.textContent = "";
    //     }
    // }
    // const [userData, setuserData] = useState({ username: "", password: "" });
    // const handleSubmit = async (e) => {
    // 	e.preventDefault();

    // 	axios.post("http://localhost:8080/userlogin", adminData)
    // 		.then((res) => {
    // 			alert(res);
    // 		})
    // 		.catch((err) => {
    // 			alert(err);
    // 		});
    // };
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
                    <div className={styles.breakLine}>
                    </div>
                    <form className={styles.boxForm} action="/" method="get">
                        <div className={styles.boxInputs}>
                            <div className={styles.pw}>
                                <TextField
                                    fullWidth
                                    maxWidth="sm"
                                    required
                                    id="outlined-required"
                                    label="First name"
                                    defaultValue=""
                                />
                            </div>
                            <div className={styles.pw}>
                                <TextField
                                    fullWidth
                                    maxWidth="sm"
                                    required
                                    id="outlined-required"
                                    label="Last name"
                                    defaultValue=""
                                />
                            </div>
                            <div className={styles.pw}>
                                <TextField
                                    fullWidth
                                    maxWidth="sm"
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    defaultValue=""
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
                                />
                            </div>
                            <div className={styles.pw}>
                                <TextField
                                    fullWidth
                                    maxWidth="sm"
                                    required
                                    id="outlined-required"
                                    label="Car Registration Number"
                                    defaultValue=""
                                    style={{ "marginBottom": "2em" }}
                                />
                            </div>
                            <Link to="/verify" style={{ textDecoration: "none" }}>
                                <Button variant="contained" className={styles.submit} className={styles.btn}>Register</Button>
                            </Link>
                        </div>
                        <div className={styles.reg}>
                            Already registered?  &nbsp;<Link to="/user" style={{ textDecoration: "none" }}><a href="#" >Sign in</a></Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Usernew
