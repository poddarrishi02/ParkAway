import React, { useState } from 'react'
import styles from '../styles/dashboard/mybooking.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Default from './Default';
import axios from 'axios';
function MyBookings({userData}) {

    const [booking, setbooking] = useState([]);
    React.useEffect(()=> {
        axios.post("http://localhost:8080/user/viewBookings", userData.userName ).then((res) => {
            setbooking(res.data);
        })} , [] );

    // const bookingsInitial = [];
    return (
        <div className={styles.outer}>
            <div className={styles.title}>My Bookings</div>
            <div className={styles.manage}>
                {booking.length==0 ? <div className={styles.nobooking}>No bookings</div>:
                <table>
                    <thead>
                        <th className={styles.tablehead}>Location</th>
                        <th className={styles.tablehead}>Date</th>
                        <th className={styles.tablehead}>Check-in Time</th>
                        <th className={styles.tablehead}>Check-out Time</th>
                        <th className={styles.tablehead}>Cost</th>
                        <th className={styles.tablehead}>Status</th>
                    </thead>
                    <tbody>
                        {booking.map(w => {
                            return (
                                <tr>
                                    <td className={styles.tablerows} data-label="loc">{w.loc} </td>
                                    <td className={styles.tablerows} data-label="date">{w.date} </td>
                                    <td className={styles.tablerows} data-label="inTime">{w.inTime}</td>
                                    <td className={styles.tablerows} data-label="outTime">{w.outTime}</td>
                                    <td className={styles.tablerows} data-label="cost">{w.cost}</td>
                                    <td className={styles.status} data-label="status">{w.payment? "Booking Confirmed" : "Booking Awaited"}</td>
                                </tr>);
                        })}
                    </tbody>
                </table>}
            </div>
        </div >
    )
}

export default MyBookings
