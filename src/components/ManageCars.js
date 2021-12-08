import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/dashboard/manageCars.module.css'
function ManageCars() {
    const carsInitial = [{ name: "Ken Griffey", carno: "xxxx", id: 1 }, { name: "Derek Jeter", carno: "xxxx", id: 2 }, { name: "Cal Ripken", carno: "xxxx", id: 3 }];
    const [cars, setcars] = useState(carsInitial);
    const [user, setUser] = useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:8080/admin/userData").then(res => {
            setUser(res.data);
    })
    }, [])
    return (
        <div className={styles.outer}>
            <div className={styles.top}>
            <div className={styles.title}>
                Manage Cars
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
                {cars.length==0?<div className={styles.defaultmsg}>No cars</div>:
                <table>
                    <thead>
                        <th>Username</th>
                        <th>Car Number</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {user.map(w => {
                            return (
                                <tr>
                                    <td className={styles.tablecontent} data-label="name">{w.name} </td>
                                    <td className={styles.carno} data-label="war">{w.car_no}</td>
                                    <td data-label="ba">
                                        
                                        <Button id={w.id} style={{width:"9vw"}} variant="contained" startIcon={<DeleteIcon style={{fill: "white" }} />}
                                            onClick={(e) => {
                                                setcars(cars.filter(w => w.id !=e.target.id))
                                                console.log(cars.size);
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

export default ManageCars
