import React, { useState } from 'react'
import styles from '../styles/dashboard/bookslot.module.css'
import bg from "../assets/userdashbg.png"
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AddWorker from './AddWorker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Default from './Default';
// export default function MaterialUIPickers() {
//     const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

//     const handleChange = (newValue) => {
//       setValue(newValue);
//     };
function MyBookings() {
    const [value, setValue] = useState(new Date('2021-12-06T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles.outer}>
            <div className={styles.title}>Book Parking Slot</div>
            <div className={styles.bgcol}>
            <div className={styles.input}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormControl className={styles.loc}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Location"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>A</MenuItem>
                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>C</MenuItem>
                            <MenuItem value={30}>D</MenuItem>
                        </Select>
                    </FormControl>
                    <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Check-in Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Check-out Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Link to="/verify" style={{ textDecoration: "none" }}>
                <Button style={{ fontWeight:"bolder", fontSize:"1.2em", textTransform: "none", width: "6vw",height:"7.75vh" }} variant="contained" size="medium">
                    Book
                </Button>
                </Link>
            </div>
            <div className={styles.book}>
                </div>
            </div>
            <img className={styles.image} src={bg}></img>
        </div >
    )
}

export default MyBookings
