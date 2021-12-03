import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/dashboard/staffprofile.module.css'
function StaffProfile() {
    let name= "Ram";
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className={styles.title}>
                Your Profile
            </div>
            
        </div>
    )
}

export default StaffProfile
