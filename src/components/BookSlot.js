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
import WorkerCard from './WorkerCard';
import {workerData1,workerData2,workerData3} from './WorkerData';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import cstyles from '../styles/dashboard/workercard.module.css'
// export default function MaterialUIPickers() {
//     const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

//     const handleChange = (newValue) => {
//       setValue(newValue);
//     };
function MyBookings() {
    const [value, setValue] = useState(new Date('2021-12-06T21:11:54'));
    const [active, setactive] = useState(1);
    const [service, setservice] = useState(1);
    const [workerData, setworkerData] = useState(workerData1);
    const [dryclean, setdryclean] = useState([]);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {active == 1 && <div className={styles.outer}>
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
                        <Button onClick={() => {
                            setactive(2)
                        }}
                            style={{ fontWeight: "bolder", fontSize: "1.2em", textTransform: "none", width: "6vw", height: "7.75vh" }} variant="contained" size="medium">
                            Book
                        </Button>
                    </div>
                    <div className={styles.book}>
                    </div>
                </div>
                <img className={styles.image} src={bg}></img>
            </div >}
            {active == 2 &&
                <div className={styles.outer2}>
                    <h1 className={styles.addon}>Additional Services</h1>
                    <div className={styles.container}>
                        <div className={styles.btns}>
                            <button className={styles.btn} style={service==1?{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}:null} onClick={() => { setservice(1) ;setworkerData(workerData1)}}>Dry Cleaning</button>
                            <button className={styles.btn} style={service==2?{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}:null} onClick={() => { setservice(2) ;setworkerData(workerData2)}}>Washing</button>
                            <button className={styles.btn} style={service==3?{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}:null} onClick={() => { setservice(3) ;setworkerData(workerData3)}}>Repairing</button>
                        </div>
                        {/* <div className={styles.cards}>
                            {workerData.map(x => {
                                return (
                                    <WorkerCard name={x.name} rating={x.rating} drycleanarr={dryclean} id={x.key} />
                                )
                            })}
                        </div> */}
                        
                        <div className={styles.cards}>
                            {workerData.map(x => {
                                return (
                                    <label className={styles.cardlabel}>
                                        <input type="radio" name="product" className={styles.cardinputelement} />
                                        <div className={styles.cardinput}>
                                            <div className={cstyles.imgdiv}>
                                                <Avatar src="/broken-image.jpg" className={cstyles.img} sx={{ height: '100px', width: '100px' }} />
                                            </div>
                                            <div className={cstyles.details}>
                                                <h1 className={cstyles.wname}>{x.name}</h1>
                                                <Rating name="half-rating-read" defaultValue={x.rating} precision={0.5} readOnly className={cstyles.rating} />
                                                {/* <Button style={{ textTransform: "none", width: "5vw" }} variant="contained" className={cstyles.addbtn} id={id}
                    onClick={() => {
                        setselected(!selected);
                        var msg=selected?"Add":"Selected";
                        setbtnmsg(msg);
                        var newarr=[];
                        drycleanarr.map(x=>{

                        })
                        setdrycleanarr()
                    }}>
                    {btnmsg}
                </Button> */}
                                            </div>
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                        {/* <Button style={{ textTransform: "none", width: "5vw" }} variant="contained" onclick={()=>{
                            // var ele = document.getElementsByName("product");
                            // for(var i=0;i<ele.length;i++)
                            //    ele[i].checked = false;
                        }}>Reset</Button> */}
                </div>}
        </>
    )
}

export default MyBookings
