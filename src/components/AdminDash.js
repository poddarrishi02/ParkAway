import React, { useState } from 'react'
import styles from '../styles/dashboard/admin.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import ManageCars from './ManageCars';
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import Default from './Default';
import WorkersReport from './WorkersReport';

function AdminDash({access, setAccess}) {
    const [active, setactive] = useState(<AddWorker />);
    const handleClick = (e) => {
        setAccess({...access, admin: false});
    }
    React.useEffect(() => {
        setAccess({...access, admin: true});
    }, [])
    return (
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>Admin</div>
                <div className={styles.logout}>
                    <Link to="/" style={{textDecoration:"none"}}><Button variant="outlined" onClick={(e) => handleClick(e)} startIcon={<LogoutIcon style={{ fill: "white" }} />} style={{ backgroundColor:"black" ,fontWeight: "bolder", fontFamily: 'Ubuntu', minWidth: "100%", color: "white", textTransform: "none", fontSize: "1.1em" }} >
                        Logout
                    </Button></Link>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<AddWorker />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Manage Workers</Button>
                    </div>

                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<ManageCars />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Manage Cars</Button>
                    </div>
                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<WorkersReport />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Workers Report</Button>
                    </div>
                    {/* <div className={styles.dashItems}>6</div> */}
                </div>
                <div className={styles.display}>
                    {active}
                </div>
            </div>
        </div>
    )
}

export default AdminDash
