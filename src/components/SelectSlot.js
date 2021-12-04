import React, { useState } from 'react'
import styles from '../styles/dashboard/selectslot.module.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Default from './Default';
import { arr1, arr2, arr3 } from './ServiceSlotList';

function SelectSlot() {
    // const [service, setservice] = useState("Dry cleaning");
    const [servicenum, setservicenum] = useState(1);
    // const [serviceArray, setserviceArray] = useState(arr1);
    const [dryClean, setdryClean] = useState(arr1);
    const [wash, setwash] = useState(arr2);
    const [repair, setrepair] = useState(arr3);
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var count = 8;
    // const [choices, setchoices] = useState(serviceArray);
    var arr;
    // console.log(choices);
    function saveChanges1() { }
    function saveChanges2() { }
    function saveChanges3() { }
    return (
        <>
            {servicenum == 1 &&
                <div className={styles.outer}>
                    <div className={styles.toprow}>
                        {/* <FormControl className={styles.servicelist}>
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
                </FormControl> */}
                        <div className={styles.headings}>
                            <div className={styles.backbtn} onClick={() => { setservicenum(3) }}>
                                <ArrowBackIcon />
                            </div>
                            <h1 className={styles.serviceheading}>Dry cleaning</h1>
                            <div className={styles.frwrdbtn} onClick={() => { setservicenum(2) }}>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                        <div className={styles.savebtn}>
                            <Button style={{ textTransform: "none", marginRight: "0", marginLeft: "50px" }}
                                variant="contained" className={styles.save} onClick={saveChanges1}>
                                Save Changes
                            </Button>
                        </div>
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
                        {arr1.map(x => {
                            return (
                                <tr className={styles.row}>
                                    <th>{count}-{++count}</th>
                                    {x.map(y => {
                                        return (
                                            <td><input type="checkbox" id={y.key} checked={y.val === true ? 'checked' : ''} onClick={(e) => {
                                                console.log(e.target.id);
                                                arr = arr1.map(w => {
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
                                                setdryClean(arr);
                                                // console.log(choices);
                                            }}></input></td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </table>

                </div >}
            {servicenum == 2 &&
                <div className={styles.outer2}>
                    <div className={styles.toprow}>
                        <div className={styles.headings}>
                            <div className={styles.backbtn} onClick={() => { setservicenum(1) }}>
                                <ArrowBackIcon />
                            </div>
                            <h1 className={styles.serviceheading}>Washing</h1>
                            <div className={styles.frwrdbtn} onClick={() => { setservicenum(3) }}>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                        <div className={styles.savebtn}>
                            <Button style={{ textTransform: "none", marginRight: "0", marginLeft: "50px" }}
                                variant="contained" className={styles.save} onClick={saveChanges2}>
                                Save Changes
                            </Button>
                        </div>
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
                        {arr2.map(x => {
                            return (
                                <tr className={styles.row}>
                                    <th>{count}-{++count}</th>
                                    {x.map(y => {
                                        return (
                                            <td><input type="checkbox" id={y.key} checked={y.val === true ? 'checked' : ''} onClick={(e) => {
                                                console.log(e.target.id);
                                                arr = arr2.map(w => {
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
                                                setrepair(arr);
                                            }}></input></td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </table>
                </div >}
            {servicenum == 3 &&
                <div className={styles.outer3}>
                    <div className={styles.toprow}>
                        <div className={styles.headings}>
                            <div className={styles.backbtn} onClick={() => { setservicenum(2) }}>
                                <ArrowBackIcon />
                            </div>
                            <h1 className={styles.serviceheading}>Repairing</h1>
                            <div className={styles.frwrdbtn} onClick={() => { setservicenum(1) }}>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                        <div className={styles.savebtn}>
                            <Button style={{ textTransform: "none", marginRight: "0", marginLeft: "50px" }}
                                variant="contained" className={styles.save} onClick={saveChanges3}>
                                Save Changes
                            </Button>
                        </div>
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
                        {arr3.map(x => {
                            return (
                                <tr className={styles.row}>
                                    <th>{count}-{++count}</th>
                                    {x.map(y => {
                                        return (
                                            <td><input type="checkbox" id={y.key} checked={y.val === true ? 'checked' : ''} onClick={(e) => {
                                                console.log(e.target.id);
                                                arr = arr3.map(w => {
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
                                                setwash(arr);
                                            }}></input></td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </table>
                </div >}
        </>
    )
}

export default SelectSlot;
