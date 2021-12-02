import React, { useState } from 'react'
import styles from '../styles/dashboard/admin.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import Default from './Default';

function AdminDash() {
    const [active, setactive] = useState(<AddWorker />);
    return (
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>Admin</div>
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
                                        setactive(<AddWorker />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Manage Parking Space</Button>
                    </div>
                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<AddWorker />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Manage Parking Slots</Button>
                    </div>
                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<AddWorker />)
                                    }} variant="text" style={{ fontWeight:"bolder",fontFamily:"Ubuntu",minWidth:"100%",justifyContent: "flex-start", color: "white", textTransform: "none",fontSize: "1.1em"  }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Manage Cars</Button>
                    </div>
                    <div className={styles.dashItems}>
                    <Button onClick={() => {
                                        setactive(<AddWorker />)
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
