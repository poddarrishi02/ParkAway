import React, { useState } from 'react'
import styles from '../styles/dashboard/selectslot.module.css'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Default from './Default';
import { arr1, arr2, arr3 } from './ServiceSlotList';

function SelectSlot() {
    const [service, setservice] = useState("Dry cleaning");
    const [serviceArray, setserviceArray] = useState(arr1);
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var count = 8;
    const [choices, setchoices] = useState(serviceArray);
    var arr;
    console.log(choices);
    function saveChanges(){}
    return (
        <div className={styles.outer}>
            <div className={styles.toprow}>
                <FormControl className={styles.servicelist}>
                    <InputLabel id="demo-simple-select-label">Service</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Services"
                        value={service}
                        onChange={(e) => {
                            setservice(e.target.value); console.log(service);
                            setserviceArray(e.target.value == "Dry cleaning" ? arr1 : e.target.value == "Washing" ? arr2 : arr3);
                            setchoices(serviceArray);
                        }}
                    >
                        <MenuItem value="Dry cleaning">Dry cleaning</MenuItem>
                        <MenuItem value="Washing">Washing</MenuItem>
                        <MenuItem value="Repairing">Repairing</MenuItem>
                    </Select>
                </FormControl>
                <Button style={{ textTransform: "none", marginRight: "0", marginLeft: "50px" }} 
                variant="contained" className={styles.save} onClick={saveChanges}>
                    Save Changes
                </Button>
            </div>
            <table className={styles.table}>
                <tr>
                    <th><div style={{ width: "50px" }} ></div></th>
                    {days.map(d => {
                        return (
                            <th><div style={{ width: "100px", color: "white" }}>{d}</div></th>
                        )
                    })}

                </tr>
                {choices.map(x => {
                    return (
                        <tr className={styles.row}>
                            <th>{count}-{++count}</th>
                            {x.map(y => {
                                return (
                                    <td><input type="checkbox" id={y.key} checked={y.val === true ? 'checked' : ''} onClick={(e) => {
                                        console.log(e.target.id);
                                        arr = choices.map(w => {
                                            return w.map(z => {
                                                if (z.key == e.target.id) {
                                                    console.log(z.val);
                                                    return { val: !(z.val), key: z.key };
                                                }
                                                else {
                                                    return z;
                                                }
                                            })
                                        })
                                        setchoices(arr);
                                        console.log(choices);
                                    }}></input></td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
        </div >
    )
}

export default SelectSlot
