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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Select from '@mui/material/Select';
import Default from './Default';
import WorkerCard from './WorkerCard';
import { workerData1, workerData2, workerData3 } from './WorkerData';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import cstyles from '../styles/dashboard/workercard.module.css'
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// export default function MaterialUIPickers() {
//     const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

//     const handleChange = (newValue) => {
//       setValue(newValue);
//     };
function MyBookings() {
    const [value, setValue] = useState(new Date('2021-12-06T21:11:54'));
    const [booking, setBooking] = useState({
        dry_cleaning: {
            username:""
        },
        washing: {
            username: ""
        },
        repairing: {
            username: ""
        },
        date: {value},

    })
    const [active, setactive] = useState(3);
    // const [service, setservice] = useState(1);
    // const [workerData, setworkerData] = useState(workerData1);
    // const [dryclean, setdryclean] = useState([]);
    // const [activeServices, setactiveServices] = useState([0, 0, 0]);
    // const [serviceProviders, setserviceProviders] = useState(["", "", ""]);
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
                                    <MenuItem value={40}>D</MenuItem>
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
                    <h1 className={styles.addon}>Additional Services(Optional)</h1>
                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <h2 className={styles.serviceheading}>Dry cleaning - Rs. 50</h2>
                            {/* <div className={styles.btns}>
                            <button className={styles.btn} style={service==1 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(1) ;setworkerData(workerData1)}}>Dry Cleaning</button>
                            <button className={styles.btn} style={service==2 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(2) ;setworkerData(workerData2)}}>Washing</button>
                            <button className={styles.btn} style={service==3 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(3) ;setworkerData(workerData3)}}>Repairing</button>
                        </div> */}
                            <div className={styles.cards}>
                                {workerData1.map(x => {
                                    return (
                                        <label className={styles.cardlabel}>
                                            <input type="radio" name="dryclean" className={styles.cardinputelement} />
                                            <div className={styles.cardinput} >
                                                <div className={cstyles.imgdiv}>
                                                    <Avatar src="/broken-image.jpg" className={cstyles.img} sx={{ height: '100px', width: '100px' }} />
                                                </div>
                                                <div className={cstyles.details}>
                                                    <h1 className={cstyles.wname}>{x.name}</h1>
                                                    <Rating name="half-rating-read" defaultValue={x.rating} precision={0.5} readOnly className={cstyles.rating} />
                                                </div>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.container}>
                            <h2 className={styles.serviceheading}>Washing - Rs. 60</h2>
                            <div className={styles.cards}>
                                {workerData2.map(x => {
                                    return (
                                        <label className={styles.cardlabel}>
                                            <input type="radio" name="wash" className={styles.cardinputelement} />
                                            <div className={styles.cardinput}>
                                                <div className={cstyles.imgdiv}>
                                                    <Avatar src="/broken-image.jpg" className={cstyles.img} sx={{ height: '100px', width: '100px' }} />
                                                </div>
                                                <div className={cstyles.details}>
                                                    <h1 className={cstyles.wname}>{x.name}</h1>
                                                    <Rating name="half-rating-read" defaultValue={x.rating} precision={0.5} readOnly className={cstyles.rating} />
                                                </div>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.container}>
                            <h2 className={styles.serviceheading}>Repairing - Rs. 100</h2>
                            <div className={styles.cards}>
                                {workerData3.map(x => {
                                    return (
                                        <label className={styles.cardlabel}>
                                            <input type="radio" name="repair" className={styles.cardinputelement} />
                                            <div className={styles.cardinput}>
                                                <div className={cstyles.imgdiv}>
                                                    <Avatar src="/broken-image.jpg" className={cstyles.img} sx={{ height: '100px', width: '100px' }} />
                                                </div>
                                                <div className={cstyles.details}>
                                                    <h1 className={cstyles.wname}>{x.name}</h1>
                                                    <Rating name="half-rating-read" defaultValue={x.rating} precision={0.5} readOnly className={cstyles.rating} />
                                                </div>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.navigatebtns}>
                        <div className={styles.revertbtn}>
                            <Button onClick={() => {
                                setactive(1)
                            }}
                                variant="contained" startIcon={<ArrowBackIcon style={{ fill: "white" }}
                                />}>
                                Revert
                            </Button>
                        </div>
                        <div className={styles.proceedbtn}>
                            <Button onClick={() => {
                                setactive(3)
                            }}
                                variant="contained" endIcon={<ArrowForwardIcon style={{ fill: "white" }}
                                />}>
                                Proceed
                            </Button>
                        </div>
                    </div>
                </div>}
            {active == 3 &&
                <div className={styles.outer3}>
                    <div className={styles.out}>
                        <div className={styles.revertbtn2}>
                            <Button onClick={() => {
                                setactive(2)
                            }}
                                variant="contained" startIcon={<ArrowBackIcon style={{ fill: "white" }}
                                />}>
                                Revert
                            </Button>
                        </div>
                        <div className={styles.addon}>Confirm Booking</div>
                    </div>
                    <div className={styles.tableouter}>
                        <div className={styles.leftable}>
                            <div className={styles.confirm}><CheckCircleIcon sx={{fontSize:"1.2em",fill:"green"}}/> Complete Your Booking </div>
                        <div className={styles.breakLine}>
                            <div className={styles.intable}>
                                <div className={styles.inleft}>
                                    <div className={styles.leftH}>
                                        Additional Services
                                    </div>
                                </div>
                                <div className={styles.inright}>

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className={styles.rightable}>
                            <div className={styles.summary}>
                                Payment Summary
                            </div>
                            <div className={styles.breakLine}>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.rowL}>Parking Charges</div>
                                <div className={styles.rowR}>Rs 350</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.rowL}>Add-Ons Charges</div>
                                <div className={styles.rowR}>Rs 150</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.rowL}>GST (18%)</div>
                                <div className={styles.rowR}>Rs 45</div>
                            </div>
                            <div className={styles.breakLine}>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.rowl}>Amount Payable</div>
                                <div className={styles.rowr}>Rs 45</div>
                            </div>
                            <div className={styles.breakLine}>
                            </div>
                            <div className={styles.btn}>
                            <Button sx={{backgroundColor:"rgb(48,79,254)"}} style={{height:"5vh",width:"27vw"}} variant="contained" className={styles.submit}><div className={styles.pay}>Complete Payment</div></Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MyBookings
