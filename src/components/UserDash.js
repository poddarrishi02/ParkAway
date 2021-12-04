import React, { useState } from 'react'
import styles from '../styles/dashboard/user.module.css'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import BookSlot from './BookSlot';
import { Link } from 'react-router-dom'
import Default from './Default';
import MyBookings from './MyBookings';

function UserDash({userData, setUserData, access, setAccess}) {
    const [active, setactive] = useState(<BookSlot />);    
    const handleClick = (e) => {
        setAccess({...access, user: false});
    }

    React.useEffect(() => {
        
        console.log(userData);
        localStorage.clear();
        setAccess({...access, user: true});
    },[])

    return (
        //     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        //   rel="stylesheet"></link>        
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>User</div>
                <div className={styles.logout}>
                    <Link to="/"  style={{textDecoration:"none"}}><Button variant="outlined" onClick={() => handleClick()} startIcon={<LogoutIcon style={{ fill: "white" }} />} style={{ backgroundColor:"black" ,fontWeight: "bolder", fontFamily: 'Ubuntu', minWidth: "100%", color: "white", textTransform: "none", fontSize: "1.1em" }} >
                        Logout
                    </Button></Link>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    <div className={styles.dashTop}>
                        <Button onClick={() => {
                            setactive(<BookSlot />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Book a Slot</Button>
                    </div>
                    <div className={styles.dashItems}>
                        <Button onClick={() => {
                            setactive(<MyBookings />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>View My Bookings</Button>
                    </div>

                </div>
                <div className={styles.display}>
                    {active}
                </div>
            </div>
        </div>
    )
}

export default UserDash
