import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import styles from '../styles/dashboard/workercard.module.css'
import { useState } from 'react';
function WorkerCard({ name, rating, drycleanarr, setdrycleanarr, id }) {
    const [selected, setselected] = useState(false)
    const [btnmsg, setbtnmsg] = useState("Add")
    return (
        <div className={styles.container}>
            <div className={styles.imgdiv}>
                <Avatar src="/broken-image.jpg" className={styles.img} sx={{ height: '100px', width: '100px' }} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.wname}>{name}</h1>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly className={styles.rating} />
                {/* <Button style={{ textTransform: "none", width: "5vw" }} variant="contained" className={styles.addbtn} id={id}
                    onClick={() => {
                        setselected(!selected);
                        var msg=selected?"Add":"Selected";
                        setbtnmsg(msg);
                        var newarr=[];
                        drycleanarr.map(x=>{

                        })
                        setdrycleanarr()
                    }}>
                    {btnmsg}
                </Button> */}
            </div>
        </div>
    )
}

export default WorkerCard
