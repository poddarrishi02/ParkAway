import React from 'react'
import styles from '../styles/stafflogin.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Userlogin() {
    return (
        <>
            <div className={styles.outer}>
            <div className={styles.container}>
                <form className={styles.boxForm} action="/" method="get">
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
                        <div className={styles.inputsRemember}>
                            <input type="checkbox" name="remember" id="remember" ></input>
                            <label for="remember">Remember me</label>
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
        </>
    )
}

export default Userlogin
