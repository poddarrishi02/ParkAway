import React, { useState } from 'react'
import styles from '../styles/dashboard/selectslot.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Default from './Default';

function SelectSlot() {
    return (
        <div className={styles.outer}>
            <div className={styles.title}>Select Date</div>
            <div className={styles.slotform}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Date</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Monday</MenuItem>
                        <MenuItem value={20}>Tuesday</MenuItem>
                        <MenuItem value={30}>Wednesday</MenuItem>
                        <MenuItem value={30}>Thursday</MenuItem>
                        <MenuItem value={30}>Friday</MenuItem>
                        <MenuItem value={30}>Saturday</MenuItem>
                        <MenuItem value={30}>Sunday</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.title}>Select Slot</div>

            <div className={styles.slotform}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>08:00-09:00</MenuItem>
                        <MenuItem value={20}>09:00-10:00</MenuItem>
                        <MenuItem value={30}>10:00-11:00</MenuItem>
                        <MenuItem value={40}>11:00-12:00</MenuItem>
                        <MenuItem value={50}>12:00-13:00</MenuItem>
                        <MenuItem value={60}>13:00-14:00</MenuItem>
                        <MenuItem value={70}>14:00-15:00</MenuItem>
                        <MenuItem value={80}>15:00-16:00</MenuItem>
                        <MenuItem value={90}>16:00-17:00</MenuItem>
                        <MenuItem value={100}>17:00-18:00</MenuItem>
                        <MenuItem value={110}>18:00-19:00</MenuItem>
                        <MenuItem value={120}>19:00-20:00</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div >
    )
}

export default SelectSlot
