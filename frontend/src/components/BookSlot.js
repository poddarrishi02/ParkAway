import React, { useState } from "react";
import styles from "../styles/dashboard/bookslot.module.css";
import bg from "../assets/userdashbg.png";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Select from "@mui/material/Select";
import { workerData1, workerData2, workerData3 } from "./WorkerData";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import cstyles from "../styles/dashboard/workercard.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
// export default function MaterialUIPickers() {
//     const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

function BookSlot({ userData }) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0");
	var yyyy = today.getFullYear();
	today = dd + "/" + mm + "/" + yyyy;

	const [service_staff, setServiceStaff] = useState([]);
	const [value, setValue] = useState(new Date("2021-12-06T12:11:54"));
	const [value2, setValue2] = useState(new Date("2021-12-07T14:11:54"));
	const [parkingcost, setparkingcost] = useState(0);
	const [addoncost, setaddoncost] = useState(0);
	const [totalcost, settotalcost] = useState(0);
	const [finalcost, setfinalcost] = useState(0);
	const [booking, setBooking] = useState({
		dry_cleaning: "",
		washing: "",
		repairing: "",
		date: "",
		cost: 0,
		check_in: "",
		check_out: "",
		location: "",
	});
	const [active, setactive] = useState(1);
	const [dryid, setdryid] = useState(-1);
	const [washid, setwashid] = useState(-1);
	const [repairid, setrepairid] = useState(-1);

	const getservicedata = async () => {
		await axios
			.post("http://localhost:8080/user/bookSlot", booking)
			.then((res) => {
				setServiceStaff(res.data, () => {
					console.log(service_staff);
				});
			});
	};

	const [location, setlocation] = useState("North Pavilion");
	const [date, setdate] = useState(today);
	const locations = [
		"North Pavilion",
		"East Pavilion",
		"South Pavilion",
		"West Pavilion",
	];
	const handleChange = (newValue) => {
		setValue(newValue);
		setBooking(
			{
				...booking,
				date: newValue,
				check_in:
					(newValue.getHours().length < 10
						? "0" + newValue.getHours()
						: newValue.getHours()) +
					":" +
					newValue.getMinutes(),
			},
			() => {
				console.log(value.getHours() + ":" + value.getMinutes());
			}
		);
	};
	const handleChange2 = (newValue) => {
		setValue2(newValue);
		setBooking({
			...booking,
			check_out:
				(newValue.getHours().length < 10
					? "0" + newValue.getHours()
					: newValue.getHours()) +
				":" +
				newValue.getMinutes(),
		});
	};

	return (
		<>
			{active == 1 && (
				<div className={styles.outer}>
					<div className={styles.title}>Book Parking Slot</div>
					<div className={styles.bgcol}>
						<div className={styles.input}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<FormControl className={styles.loc}>
									<InputLabel id="demo-simple-select-label">
										Location
									</InputLabel>

									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										label="Location"
										value={location}
										onChange={(e) => {
											setlocation(e.target.value);
											setBooking({ ...booking, location: e.target.value });
										}}
									>
										{locations.map((x) => {
											return <MenuItem value={x}>{x}</MenuItem>;
										})}
										;
									</Select>
								</FormControl>
								<DesktopDatePicker
									label="Date"
									inputFormat="dd/MM/yyyy"
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
									value={value2}
									onChange={handleChange2}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
							<Button
								onClick={() => {
									setactive(2);
									console.log(booking);
									getservicedata();
									var val1 = value.getHours() * 60 + value.getMinutes();
									var val2 = value2.getHours() * 60 + value2.getMinutes();
									setparkingcost(
										(Math.round(((val2 - val1) / 60) * 100) / 100) * 25
									);
								}}
								style={{
									fontWeight: "bolder",
									fontSize: "1.2em",
									textTransform: "none",
									width: "6vw",
									height: "7.75vh",
								}}
								variant="contained"
								size="medium"
							>
								Book
							</Button>
						</div>
						<div className={styles.book}></div>
					</div>
					<img className={styles.image} src={bg}></img>
				</div>
			)}
			{active == 2 && (
				<div className={styles.outer2}>
					<h1 className={styles.addon}>Additional Services (Optional)</h1>
					<div className={styles.containers}>
						<div className={styles.container}>
							<h2 className={styles.serviceheading}>Dry cleaning - Rs. 50</h2>
							{/* <div className={styles.btns}>
                            <button className={styles.btn} style={service==1 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(1) ;setworkerData(workerData1)}}>Dry Cleaning</button>
                            <button className={styles.btn} style={service==2 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(2) ;setworkerData(workerData2)}}>Washing</button>
                            <button className={styles.btn} style={service==3 &&{textDecoration:"underline", textDecorationColor:"red",  textUnderlineOffset:"5px"}} onClick={() => { setservice(3) ;setworkerData(workerData3)}}>Repairing</button>
                        </div> */}
							<div className={styles.cards}>
								{workerData1.map((x, id) => {
									return (
										<label className={styles.cardlabel}>
											<input
												type="radio"
												name="dryclean"
												className={styles.cardinputelement}
												onClick={(e) => {
													console.log(e.target.parentElement.children[1].id);
													var x = e.target.parentElement.children[1].id;
													setdryid(x);
												}}
											/>
											<div className={styles.cardinput} id={id}>
												<div className={cstyles.imgdiv}>
													<Avatar
														src="/broken-image.jpg"
														className={cstyles.img}
														sx={{ height: "100px", width: "100px" }}
													/>
												</div>
												<div className={cstyles.details}>
													<h1 className={cstyles.wname}>{x.name}</h1>
													<Rating
														name="half-rating-read"
														defaultValue={x.rating}
														precision={0.5}
														readOnly
														className={cstyles.rating}
													/>
												</div>
											</div>
										</label>
									);
								})}
							</div>
						</div>
						<div className={styles.container}>
							<h2 className={styles.serviceheading}>Washing - Rs. 60</h2>
							<div className={styles.cards}>
								{workerData2.map((x, id) => {
									return (
										<label className={styles.cardlabel}>
											<input
												type="radio"
												name="wash"
												className={styles.cardinputelement}
												onClick={(e) => {
													console.log(e.target.parentElement.children[1].id);
													var x = e.target.parentElement.children[1].id;
													setwashid(x);
												}}
											/>
											<div className={styles.cardinput} id={id}>
												<div className={cstyles.imgdiv}>
													<Avatar
														src="/broken-image.jpg"
														className={cstyles.img}
														sx={{ height: "100px", width: "100px" }}
													/>
												</div>
												<div className={cstyles.details}>
													<h1 className={cstyles.wname}>{x.name}</h1>
													<Rating
														name="half-rating-read"
														defaultValue={x.rating}
														precision={0.5}
														readOnly
														className={cstyles.rating}
													/>
												</div>
											</div>
										</label>
									);
								})}
							</div>
						</div>
						<div className={styles.container}>
							<h2 className={styles.serviceheading}>Repairing - Rs. 100</h2>
							<div className={styles.cards}>
								{workerData3.map((x, id) => {
									return (
										<label className={styles.cardlabel}>
											<input
												type="radio"
												name="repair"
												className={styles.cardinputelement}
												onClick={(e) => {
													console.log(e.target.parentElement.children[1].id);
													var x = e.target.parentElement.children[1].id;
													setrepairid(x);
												}}
											/>
											<div className={styles.cardinput} id={id}>
												<div className={cstyles.imgdiv}>
													<Avatar
														src="/broken-image.jpg"
														className={cstyles.img}
														sx={{ height: "100px", width: "100px" }}
													/>
												</div>
												<div className={cstyles.details}>
													<h1 className={cstyles.wname}>{x.name}</h1>
													<Rating
														name="half-rating-read"
														defaultValue={x.rating}
														precision={0.5}
														readOnly
														className={cstyles.rating}
													/>
												</div>
											</div>
										</label>
									);
								})}
							</div>
						</div>
					</div>
					<div className={styles.navigatebtns}>
						<div className={styles.revertbtn}>
							<Button
								onClick={() => {
									setactive(1);
								}}
								variant="contained"
								startIcon={<ArrowBackIcon style={{ fill: "white" }} />}
							>
								Revert
							</Button>
						</div>
						<div className={styles.proceedbtn}>
							<Button
								onClick={() => {
									setactive(3);
									var cost = 0;
									cost += dryid != -1 ? 50 : 0;
									cost += washid != -1 ? 60 : 0;
									cost += repairid != -1 ? 100 : 0;
									setaddoncost(cost);
									settotalcost(parkingcost + cost);
									setfinalcost(
										(Math.round((parkingcost + cost) * 1.18) * 100) / 100
									);
								}}
								variant="contained"
								endIcon={<ArrowForwardIcon style={{ fill: "white" }} />}
							>
								Proceed
							</Button>
						</div>
					</div>
				</div>
			)}
			{active == 3 && (
				<div className={styles.outer3}>
					<div className={styles.out}>
						<div className={styles.addon}>Confirm Booking</div>
					</div>
					<div className={styles.tableouter}>
						<div className={styles.leftable}>
							<div className={styles.confirm}>
								<CheckCircleIcon sx={{ fontSize: "1.2em", fill: "green" }} />{" "}
								Complete Your Booking{" "}
							</div>
							<div className={styles.breakLin}></div>
							<div className={styles.head}>
								{/* <div className={styles.parkinfo}>
                            <div className={styles.park}>Parking Slot Booked!</div> */}
								{/* <div className={styles.divv}>
                            <div className={styles.park}>Location:A </div><div className={styles.park}>Date:xxxxx</div>
                            </div>
                            <div className={styles.divv}>
                            <div className={styles.park}>Check-In:A </div><div className={styles.park}>Check-Out:xxxxx</div>
                            </div> */}
								{/* </div> */}
								{/* <div className={styles.park}>Check-in Time:xxxx Check-Out Time:xxxx</div>
                            </div> */}
								{/* <div className={styles.breakLine}>
                            </div> */}
								<div className={styles.avail}>
									{dryid + washid + repairid != -3
										? "Additional Services Availed"
										: "No add-ons :/"}
								</div>

								{dryid + washid + repairid != -3 && (
									<table className={styles.inleftable}>
										<tr>
											<th>Service</th>
											<th>Staff</th>
											<th>Cost</th>
										</tr>
										{dryid != -1 && (
											<tr>
												<td>Dry Cleaning</td>
												<td>{workerData1[dryid].name}</td>
												<td>Rs 50</td>
											</tr>
										)}
										{washid != -1 && (
											<tr>
												<td>Washing</td>
												<td>{workerData2[washid].name}</td>
												<td>Rs 60</td>
											</tr>
										)}
										{repairid != -1 && (
											<tr>
												<td>Repairing</td>
												<td>{workerData3[repairid].name}</td>
												<td>Rs 100</td>
											</tr>
										)}
										{/* <div className={styles.breakLine}>
                            </div> */}
										{/* <div className={styles.breakLine}>
                            </div> */}
									</table>
								)}
							</div>
						</div>
						<div className={styles.rightable}>
							<div className={styles.summary}>Payment Summary</div>
							<div className={styles.breakLine}></div>
							{parkingcost != 0 && (
								<div className={styles.row}>
									<div className={styles.rowL}>Parking Charges</div>
									<div className={styles.rowR}>Rs {parkingcost}</div>
								</div>
							)}
							{addoncost != 0 && (
								<div className={styles.row}>
									<div className={styles.rowL}>Add-Ons Charges</div>
									<div className={styles.rowR}>Rs {addoncost}</div>
								</div>
							)}
							<div className={styles.row}>
								<div className={styles.rowL}>Total cost</div>
								<div className={styles.rowR}>Rs {totalcost}</div>
							</div>
							<div className={styles.row}>
								<div className={styles.rowL}>GST (18%)</div>
								<div className={styles.rowR}>
									Rs {(Math.round(totalcost * 0.18) * 100) / 100}
								</div>
							</div>
							<div className={styles.breakLine}></div>
							<div className={styles.row}>
								<div className={styles.rowl}>Amount Payable</div>
								<div className={styles.rowr}>Rs {finalcost}</div>
							</div>
							<div className={styles.breakLine}></div>
							<div className={styles.btn}>
								<Button
									sx={{ backgroundColor: "rgb(48,79,254)" }}
									style={{ height: "5vh", width: "27vw" }}
									variant="contained"
									className={styles.submit}
								>
									<div className={styles.pay}>Complete Payment</div>
								</Button>
							</div>
						</div>
					</div>
					<div className={styles.revpos}>
						<div className={styles.revbtn}>
							<Button
								onClick={() => {
									setactive(2);
								}}
								variant="contained"
								startIcon={<ArrowBackIcon style={{ fill: "white" }} />}
							>
								Revert
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default BookSlot;
