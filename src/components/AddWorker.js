import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

import styles from '../styles/dashboard/addWorker.module.css'
function AddWorker() {
    const workersInitial = [{ name: "Ken Griffey", status: 83.8, id: 1 }, { name: "Derek Jeter", status: 71.3, id: 2 }, { name: "Cal Ripken", status: 95.9, id: 3 }];
    const [workers, setworkers] = useState(workersInitial);
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
                {workers.length==0?<div>No workers</div>:
                <table>
                    <thead>
                        <th>Worker Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {workers.map(w => {
                            return (
                                <tr>
                                    <td data-label="name">{w.name} </td>
                                    <td data-label="war">{w.status}</td>
                                    <td data-label="ba">
                                        <Button id={w.id} variant="contained" startIcon={<DeleteIcon style={{ fill: "white" }} />}
                                            onClick={(e) => {
                                                setworkers(workers.filter(w => w.id !=e.target.id))
                                                console.log(workers.size);
                                            }}>
                                            Remove
                                        </Button></td>
                                </tr>);
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default AddWorker
