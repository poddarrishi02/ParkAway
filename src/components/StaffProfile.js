import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/dashboard/staffprofile.module.css'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function StaffProfile({staffData}) {
    let name= "Ram";
    return (
        <div className={styles.outer}>
            <div className={styles.title}>
                My Profile
            </div>
            <div className={styles.inouter}>
            
            <div className={styles.details}>

            <div className={styles.row}>
            <div className={styles.fieldName}>Name :</div> <div className={styles.content}>{staffData.name}</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Username :</div> <div className={styles.content}>{staffData.userName}</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Services :</div> <div className={styles.content}>
                 {staffData.dry_cleaning.enable ? staffData.repairing.enable ? staffData.washing.enable ? "Dry Cleaning, Repairing, Washing" : "Dry Cleaning, Repairing" : staffData.washing.enable ? "Dry Cleaning, Washing" : "Dry Cleaning" : staffData.repairing.enable ? staffData.washing.enable ? "Repairing, Washing" : "Repairing" : staffData.washing.enable ? "Washing" : "" }</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Rating :</div> <div className={styles.content}><Rating style={{fill:"orange"}} name="half-rating-read" defaultValue={staffData.rating} precision={0.5} readOnly /></div>
            </div>
            
            </div>
            <div className={styles.pic}>
            <Avatar sx={{ height: '30vh', width: '13vw' }} src="/broken-image.jpg" /></div>
            </div>
        </div>
    )
}

export default StaffProfile