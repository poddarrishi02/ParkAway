import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

import styles from '../styles/dashboard/addWorker.module.css'
function AddWorker() {
    const workersInitial = [{ name: "Ken Griffey", status: "Active", id: 1 }, { name: "Derek Jeter", status: "Active", id: 2 }, { name: "Cal Ripken", status: "Active", id: 3 }];
    const [workers, setworkers] = useState(workersInitial);
    return (
        <div className={styles.outer}>
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
                                    <td className={styles.tablecontent} data-label="name">{w.name} </td>
                                    <td className={styles.status} data-label="war">{w.status}</td>
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
