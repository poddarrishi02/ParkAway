import React from 'react'
import styles from '../styles/userlogin.module.css'
import Button from '@mui/material/Button';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
// Button
function Userlogin() {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.container}>
          <form className={styles.boxForm} action="/" method="get">
            <div className={styles.heading}>
              <h2>User Login</h2>
            </div>
            <div className={styles.boxInputs}>

              {/* <div className={styles.inputsEmail}> */}
              {/* <input type="email" name="email" id="email" className={styles.input} placeholder="Email:"></input> */}
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

              {/* <div className={styles.inputsPassword}>
            <input type="password" name="password" id="password" className={styles.input} placeholder="Password:"></input>
          </div> */}

              <div className={styles.inputsRemember}>
                <input type="checkbox" name="remember" id="remember" ></input>
                <label for="remember">Remember me</label>
              </div>

              {/* <div className={styles.boxLogin}>
            <button className={styles.btnLogin} type="submit" value="enter">Sign in</button>
          </div> */}
              {/* <input type="submit" value="Sign in" className={styles.submit}></input> */}
              <Button variant="contained" className={styles.submit}>Sign in</Button>
            </div>
            <div className={styles.reg}>
              <Link to="/usernew" style={{ textDecoration: "none" }}><a href="#" >Create an Account</a></Link>
            </div>

            <div className={styles.breakLine}>
            </div>

            <div className={styles.socials}>
              <div className={styles.social}>
                <a href="#" className={styles.linksocials}>
                  <FaFacebookF />
                  {/* <ion-icon name="logo-google"></ion-icon> */}
                </a>
              </div>

              <div className={styles.social}>
                <a href="#" className={styles.linksocials}>
                  <FaGoogle />
                  {/* <ion-icon name="logo-github"></ion-icon> */}
                </a>
              </div>
              

            </div>
            <div className={styles.reg}>
                <Link to="/" style={{ fontSize: "1.2em", fontWeight: "bold", textDecoration: "none" }}><a href="#" >Back To Homepage</a></Link>
              </div>

          </form>
          <div className={styles.welcomeOuter}>
            <p className={styles.welcome}>Welcome to</p>
            <h1 className={styles.welcome}>Car Booking Service</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlogin
