import React from 'react'
import styles from '../styles/homepage.module.css'
import img1 from "../assets/adminlogo.png"
import img2 from "../assets/userlogo.png"
import img3 from "../assets/stafflogo.png"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
function Homepage() {
    return (
        <>
            <div className={styles.outer}>
                <div className={styles.title}>Welcome to ParkAway</div>
            <div className={styles.container}>
                <form className={styles.boxForm} action="/" method="get">
                    <div className={styles.heading}>
                        <h2>Login as</h2>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <img className={styles.image} src={img1}></img>
                            <Link to="/adminlogin" style={{textDecoration:"none"}}><Button variant="contained" className={styles.submit}>Admin</Button></Link>
                        </div>
                        <div className={styles.icon}>
                            <img className={styles.image} src={img2}></img>
                            <Link to="/user" style={{textDecoration:"none"}}><Button variant="contained" className={styles.submit}>User</Button></Link>
                        </div>
                        <div className={styles.icon}>
                            <img className={styles.image} src={img3}></img>
                            <Link to="/staff" style={{textDecoration:"none"}}><Button variant="contained" className={styles.submit}>Staff</Button></Link>
                        </div>
                    </div>
                    <div className={styles.breakLine}>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Homepage
