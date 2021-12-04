import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useState } from 'react';

import styles from '../styles/dashboard/addWorker.module.css'
function AddWorker() {
    const workersInitial = [{ name: "Ken Griffey", status: "Active", id: 1 }, { name: "Derek Jeter", status: "Active", id: 2 }, { name: "Cal Ripken", status: "Active", id: 3 }];
    const [workers, setworkers] = useState(workersInitial);
    const inworkersInitial = [{ name: "Rahul Sharma", status: "Inactive", id: 1 }, { name: "Raj Shastri", status: "Inactive", id: 2 }, { name: "Mathew Jones", status: "Inactive", id: 3 }];
    const [inworkers, setinworkers] = useState(inworkersInitial);
    return (
        <div className={styles.outer}>
            <div className={styles.top}>
            <div className={styles.title}>
                Manage Workers
            </div>
            <div className={styles.save}>
            <Button variant="contained" startIcon={<SaveIcon style={{ width:"2vw",height:"5vh",fontWeight:"bolder", fill: "white" }} />}
                                            onClick={(e) => {
                                            }}>
                                            <div className={styles.saveText}>Save</div>
                                        </Button>
            </div>
            </div>
            <div className={styles.tablecontainer}>
            <div className={styles.manage}>
                <div className={styles.manageTitle}>Remove Workers</div>
                {workers.length==0?<div className={styles.defaultmsg}>No workers</div>:
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
                                        <div className={styles.deact}>
                                        <Button style={{width:"9vw"}} variant="contained" startIcon={<IndeterminateCheckBoxIcon style={{ fill: "white" }} />}
                                            onClick={(e) => {
                                                // setworkers(workers.filter(w => w.id !=e.target.id))
                                                // console.log(workers.size);
                                            }}>
                                            Deactivate
                                        </Button>
                                        </div>
                                        
                                        <Button id={w.id} style={{width:"9vw"}} variant="contained" startIcon={<DeleteIcon style={{fill: "white" }} />}
                                            onClick={(e) => {
                                                setworkers(workers.filter(w => w.id !=e.target.id))
                                                console.log(workers.size);
                                            }}>
                                            Remove
                                        </Button>
                                        
                                        </td>
                                </tr>);
                        })}
                    </tbody>
                </table>}
            </div>
            <div className={styles.manage}>
                <div className={styles.manageTitle}>Add Workers</div>
                {inworkers.length==0?<div>No workers</div>:
                <table>
                    <thead>
                        <th>Worker Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {inworkers.map(w => {
                            return (
                                <tr>
                                    <td className={styles.tablecontent} data-label="name">{w.name} </td>
                                    <td className={styles.instatus} data-label="war">{w.status}</td>
                                    <td data-label="ba">
                                    <div className={styles.deact}>
                                        <Button id={w.id} style={{width:"7vw"}} variant="contained" startIcon={<AddIcon style={{ fill: "white" }} />}
                                            onClick={(e) => {
                                                // setworkers(inworkers.filter(w => w.id !=e.target.id))
                                                // console.log(inworkers.size);
                                            }}>
                                            Add
                                        </Button>
                                        </div>
                                        <Button id={w.id} style={{width:"7vw"}} variant="contained" startIcon={<DeleteIcon style={{fill: "white" }} />}
                                            onClick={(e) => {
                                                setworkers(workers.filter(w => w.id !=e.target.id))
                                                console.log(workers.size);
                                            }}>
                                            Remove
                                        </Button>
                                        </td>
                                </tr>);
                        })}
                    </tbody>
                </table>}
            </div>
            </div>
        </div>
    )
}

export default AddWorker
