import React, { useState } from "react";
import styles from "../styles/dashboard/selectslot.module.css";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect } from "react";
import axios from "axios";

function SelectSlot() {
	const [servicenum, setservicenum] = useState(1);
	const [staffData, setstaffData] = useState();

	var m = 10,
		n = 7;
	var arr1 = new Array(m);
	var arr2 = new Array(m);
	var arr3 = new Array(m);
	for (var i = 0; i < m; i++) {
		arr1[i] = new Array(n);
		arr2[i] = new Array(n);
		arr3[i] = new Array(n);
	}
    const [dryClean, setdryClean] = useState([]);
	const [wash, setwash] = useState([]);
	const [repair, setrepair] = useState([]);
	// const stateSetter = async (data) => {
	// 	// setdryClean(data.dry_cleaning.schedule.slice(0, m));
	// 	// setwash(data.washing.schedule.slice(0, m));
	// 	// setrepair(data.repairing.schedule.slice(0, m));
	// };

	useEffect(() => {
		axios.post("http://localhost:8080/staff/getStaff").then((res) => {
			setstaffData(res.data);
			arr1 = res.data.dry_cleaning.schedule
				.slice(0, m)
				.map((index) => index.slice(0, n));
			arr2 = res.data.washing.schedule
				.slice(0, m)
				.map((index) => index.slice(0, n));
			arr3 = res.data.repairing.schedule
				.slice(0, m)
				.map((index) => index.slice(0, n));
            setdryClean(arr1);
            setwash(arr2);
            setrepair(arr3);
		});
	}, []);

	

	// const saveChangestoDataBase = () => {
		
	// };

	var days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	var count = 8;
	var arr;
	function saveChanges1() {
		var track = true;
		for (var i = 0; i < m; i++) {
			for (var j = 0; j < n; j++) {
				if (dryClean[i][j]) {
					track = false;
					setstaffData({
						...staffData,
						dry_cleaning: {
							enable: true,
							schedule: dryClean,
						},
					});
				}
			}
		}
		if (track) {
			setstaffData({
				...staffData,
				dry_cleaning: {
					enable: false,
				},
			});
		}
		// saveChangestoDataBase();
        axios
			.post("http://localhost:8080/staff/updateStaff", staffData)
			.then((res) => {
				console.log(res.data);
			})
            .catch((err) => {
                alert(err);
            });
	}
	function saveChanges2() {
		var track = true;
		for (var i = 0; i < m; i++) {
			for (var j = 0; j < n; j++) {
				if (wash[i][j]) {
					track = false;
					setstaffData({
						...staffData,
						washing: {
							enable: true,
							schedule: wash,
						},
					});
				}
			}
		}
		if (track) {
			setstaffData({
				...staffData,
				washing: {
					enable: false,
				},
			});
		}
		// saveChangestoDataBase();
        axios
			.post("http://localhost:8080/staff/updateStaff", staffData)
			.then((res) => {
				console.log(res.data);
			})
            .catch((err) => {
                alert(err);
            });
	}
	function saveChanges3() {
		var track = true;
		for (var i = 0; i < m; i++) {
			for (var j = 0; j < n; j++) {
				if (repair[i][j]) {
					track = false;
					setstaffData({
						...staffData,
						repairing: {
							enable: true,
							schedule: dryClean,
						},
					});
				}
			}
		}
		if (track) {
			setstaffData({
				...staffData,
				repairing: {
					enable: false,
				},
			});
		}
		// saveChangestoDataBase();
        axios
			.post("http://localhost:8080/staff/updateStaff", staffData)
			.then((res) => {
				console.log(res.data);
			})
            .catch((err) => {
                alert(err);
            });
	}

	return (
		<>
			{servicenum == 1 && (
				<div className={styles.outer}>
					<div className={styles.toprow}>
						<div className={styles.headings}>
							<div
								className={styles.backbtn}
								onClick={() => {
									setservicenum(3);
								}}
							>
								<ArrowBackIcon />
							</div>
							<h1 className={styles.serviceheading}>Dry cleaning</h1>
							<div
								className={styles.frwrdbtn}
								onClick={() => {
									setservicenum(2);
								}}
							>
								<ArrowForwardIcon />
							</div>
						</div>
						<div className={styles.savebtn}>
							<Button
								style={{
									textTransform: "none",
									marginRight: "0",
									marginLeft: "50px",
								}}
								variant="contained"
								className={styles.save}
								onClick={saveChanges1}
							>
								Save Changes
							</Button>
						</div>
					</div>
					<table className={styles.table}>
						<tr>
							<th>
								<div style={{ width: "50px" }}></div>
							</th>
							{days.map((d) => {
								return (
									<th>
										<div style={{ width: "100px", color: "white" }}>{d}</div>
									</th>
								);
							})}
						</tr>
						{dryClean.map((x, index_x) => {
							return (
								<tr className={styles.row}>
									<th>
										{count}-{++count}
									</th>
									{x.map((y, index_y) => {
										return (
											<td>
												<input
													type="checkbox"
													id={index_x * n + index_y}
													checked={y === true ? "checked" : ""}
													onChange={(e) => {
														arr = dryClean.map((w, index_w) => {
															return w.map((z, index_z) => {
																if (index_w * n + index_z == e.target.id) {
																	console.log(z);
																	return !z;
																} else {
																	return z;
																}
															});
														});
														setdryClean(arr);
													}}
												></input>
											</td>
										);
									})}
								</tr>
							);
						})}
					</table>
				</div>
			)}

			{servicenum == 2 && (
				<div className={styles.outer2}>
					<div className={styles.toprow}>
						<div className={styles.headings}>
							<div
								className={styles.backbtn}
								onClick={() => {
									setservicenum(1);
								}}
							>
								<ArrowBackIcon />
							</div>
							<h1 className={styles.serviceheading}>Washing</h1>
							<div
								className={styles.frwrdbtn}
								onClick={() => {
									setservicenum(3);
								}}
							>
								<ArrowForwardIcon />
							</div>
						</div>
						<div className={styles.savebtn}>
							<Button
								style={{
									textTransform: "none",
									marginRight: "0",
									marginLeft: "50px",
								}}
								variant="contained"
								className={styles.save}
								onClick={saveChanges2}
							>
								Save Changes
							</Button>
						</div>
					</div>
					<table className={styles.table}>
						<tr>
							<th>
								<div style={{ width: "50px" }}></div>
							</th>
							{days.map((d) => {
								return (
									<th>
										<div style={{ width: "100px", color: "white" }}>{d}</div>
									</th>
								);
							})}
						</tr>
						{wash.map((x, index_x) => {
							return (
								<tr className={styles.row}>
									<th>
										{count}-{++count}
									</th>
									{x.map((y, index_y) => {
										return (
											<td>
												<input
													type="checkbox"
													id={index_x * n + index_y}
													checked={y === true ? "checked" : ""}
													onChange={(e) => {
														arr = wash.map((w, index_w) => {
															return w.map((z, index_z) => {
																if (index_w * n + index_z == e.target.id) {
																	console.log(z);
																	return !z;
																} else {
																	return z;
																}
															});
														});
														setwash(arr);
													}}
												></input>
											</td>
										);
									})}
								</tr>
							);
						})}
					</table>
				</div>
			)}

			{servicenum == 3 && (
				<div className={styles.outer3}>
					<div className={styles.toprow}>
						<div className={styles.headings}>
							<div
								className={styles.backbtn}
								onClick={() => {
									setservicenum(2);
								}}
							>
								<ArrowBackIcon />
							</div>
							<h1 className={styles.serviceheading}>Repairing</h1>
							<div
								className={styles.frwrdbtn}
								onClick={() => {
									setservicenum(1);
								}}
							>
								<ArrowForwardIcon />
							</div>
						</div>
						<div className={styles.savebtn}>
							<Button
								style={{
									textTransform: "none",
									marginRight: "0",
									marginLeft: "50px",
								}}
								variant="contained"
								className={styles.save}
								onClick={saveChanges3}
							>
								Save Changes
							</Button>
						</div>
					</div>
					<table className={styles.table}>
						<tr>
							<th>
								<div style={{ width: "50px" }}></div>
							</th>
							{days.map((d) => {
								return (
									<th>
										<div style={{ width: "100px", color: "white" }}>{d}</div>
									</th>
								);
							})}
						</tr>
						{repair.map((x, index_x) => {
							return (
								<tr className={styles.row}>
									<th>
										{count}-{++count}
									</th>
									{x.map((y, index_y) => {
										return (
											<td>
												<input
													type="checkbox"
													id={index_x * n + index_y}
													checked={y === true ? "checked" : ""}
													onChange={(e) => {
														arr = repair.map((w, index_w) => {
															return w.map((z, index_z) => {
																if (index_w * n + index_z == e.target.id) {
																	console.log(z);
																	return !z;
																} else {
																	return z;
																}
															});
														});
														setrepair(arr);
													}}
												></input>
											</td>
										);
									})}
								</tr>
							);
						})}
					</table>
				</div>
			)}
		</>
	);
}

export default SelectSlot;
