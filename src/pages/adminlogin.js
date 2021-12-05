import React from 'react'
import styles from '../styles/stafflogin.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../styles/homepageanimation.css"
import "../styles/homepageanimation2.css"
import { Link } from 'react-router-dom';
function Adminlogin() {
    return (
        <>
            <div className={styles.outer}>
                <div className={styles.container}>
                    <form className={styles.boxForm} action="/" method="get">
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
                                />
                            </div>
                            <Button variant="contained" className={styles.submit}>Sign in</Button>
                        </div>
                        <div className={styles.breakLine}>
                        </div>
                        <div className={styles.reg}>
                            <Link to="/" style={{ fontSize: "1.2em", fontWeight: "bolder", textDecoration: "none" }}><a href="#" >Back To Homepage</a></Link>
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
    )
}

export default Adminlogin
