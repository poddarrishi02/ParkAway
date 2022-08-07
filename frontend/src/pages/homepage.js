import React, { useEffect } from 'react'
import { useWindowSize } from "react-hooks-window-size";
import styles from '../styles/homepage.module.css'
import img1 from "../assets/adminlogo.png"
import img2 from "../assets/userlogo.png"
import img3 from "../assets/stafflogo.png"
import bgleft from "../assets/graph.png"
import bgright from "../assets/graph2.png"
import bgtopleft from "../assets/graph3.png"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import "../components/homepage/homepage_animation.js";
import { canvasDots } from "../components/homepage/homepage_animation.js";
import { particles } from "../components/homepage/homepage_paricles";
import "../components/homepage/homepage_animation.js";
import '../styles/homepageanimation.css'
function Homepage() {
    const size = useWindowSize(1500, 1500);
    useEffect(() => {
        if (size.width >= 1010)
            canvasDots();
        else
            particles();
    }, [size.width])
    return (
        <>
            <div className={styles.outer}>
                {/* <div className={styles.imgright}>
                    <img className={styles.ima} src={bgright}></img>
                </div>
                <div className={styles.imgtopleft}>
                    <img className={styles.im} src={bgtopleft}></img>
                </div> */}
                <div className={styles.title}>Welcome to ParkAway</div>
                <div className={styles.container}>
                    <form className={styles.boxForm} action="/" method="get">
                        <div className={styles.heading}>
                            Login as
                        </div>
                        <div className={styles.icons}>
                            <div className={styles.icon}>
                                <img className={styles.image} src={img1}></img>
                                <Link to="/adminlogin" style={{ textDecoration: "none" }}><Button variant="contained" className={styles.submit}>Admin</Button></Link>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.image} src={img2}></img>
                                <Link to="/user" style={{ textDecoration: "none" }}><Button variant="contained" className={styles.submit}>User</Button></Link>
                            </div>
                            <div className={styles.icon}>
                                <img className={styles.image} src={img3}></img>
                                <Link to="/staff" style={{ textDecoration: "none" }}><Button variant="contained" className={styles.submit}>Staff</Button></Link>
                            </div>
                        </div>
                        <div className={styles.breakLine}>
                        </div>
                    </form>

                </div>
                {/* <div className={styles.imgleft}>
                    <img className={styles.imag} src={bgleft}></img>
                </div> */}
            </div>
            <canvas className="dots" />
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
            {/* </div> */ }
        </>
    )
}

export default Homepage
