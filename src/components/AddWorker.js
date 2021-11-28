import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from '../styles/dashboard/addWorker.module.css'
function AddWorker() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className={styles.title}>
                Manage Workers
            </div>
            <div className={styles.addW}>
                <Button style={{ textTransform: "none" }} variant="contained" size="medium">
                    +Add Worker
                </Button>
            </div>
            <div className={styles.manage}>
                <div className={styles.manageTitle}>Current Workers</div>
                <table>

                    <thead>
                        <th>Worker Name</th>
                        <th>Status</th>
                        <th>Action</th>

                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="name">Ken Griffey </td>
                            <td data-label="war">83.8</td>
                            <td data-label="ba">
                                <Button variant="contained" startIcon={<DeleteIcon style={{ fill: "white" }}/>} >
                                Remove
                            </Button></td>

                        </tr>

                        <tr>
                            <td data-label="name">Derek Jeter</td>
                            <td data-label="war">71.3</td>
                            <td data-label="ba">
                                <Button variant="contained" startIcon={<DeleteIcon style={{ fill: "white" }}/>} >
                                Remove
                            </Button></td>

                        </tr>

                        <tr>
                            <td data-label="name">Cal Ripken </td>
                            <td data-label="war">95.9</td>
                            <td data-label="ba">
                                <Button variant="contained" startIcon={<DeleteIcon style={{ fill: "white" }}/>} >
                                Remove
                            </Button></td>

                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default AddWorker
