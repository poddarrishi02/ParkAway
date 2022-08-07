import React, { useState } from 'react'
import styles from '../styles/dashboard/staff.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import LogoutIcon from '@mui/icons-material/Logout';
import StaffProfile from './StaffProfile';
import SelectSlot from './SelectSlot';
import { Link } from 'react-router-dom'
import Default from './Default';

function WorkerDash({staffData, setStaffData, access, setAccess}) {
    const [active, setactive] = useState(<SelectSlot />);
    const handleClick = (e) => {
        setAccess({...access, staff: false});
    }

    React.useEffect(() => {
        localStorage.clear();
        setAccess({...access, staff: true});        
    }, [])


    return (
        //     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        //   rel="stylesheet"></link>
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>Staff</div>
                <div className={styles.logout}>
                    <Link to="/" style={{textDecoration:"none"}}><Button variant="outlined" onClick={(e) => handleClick(e)} startIcon={<LogoutIcon style={{ fill: "white" }} />} style={{ backgroundColor:"black" ,fontWeight: "bolder", fontFamily: 'Ubuntu', minWidth: "100%", color: "white", textTransform: "none", fontSize: "1.1em" }} >
                        Logout
                    </Button></Link>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    <div className={styles.dashTop}>
                        <Button onClick={() => {
                            setactive(<StaffProfile staffData={staffData} />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>View Profile</Button>
                    </div>
                    <div className={styles.dashItems}>
                        <Button onClick={() => {
                            setactive(<SelectSlot staffData={staffData} setStaffData={setStaffData} />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Select Services/Slots </Button>
                    </div>
                </div>
                <div className={styles.display}>
                    {active}
                </div>
            </div>
        </div>
    )
}

export default WorkerDash
