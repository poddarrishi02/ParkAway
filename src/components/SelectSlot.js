import React, { useState } from "react";
import styles from "../styles/dashboard/selectslot.module.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Default from "./Default";

function SelectSlot({ staffData }) {
	const [service, setservice] = useState("Dry cleaning");

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
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			arr1[i][j] = { val: false , key: i * n + j };
			arr2[i][j] = { val: false , key: i * n + j };
			arr3[i][j] = { val: false , key: i * n + j };
		}
	}
	arr1[2][3].val = true;
	arr1[5][4].val = true;
	arr2[4][6].val = true;
	arr2[9][2].val = true;
	arr3[5][1].val = true;
	arr3[3][6].val = true;

	const [serviceArray, setserviceArray] = useState(arr1);
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
	const [choices, setchoices] = useState(serviceArray);
	var arr;
	console.log(choices);
	function saveChanges() {}
	return (
		<div className={styles.outer}>
			<div className={styles.toprow}>
				<FormControl className={styles.servicelist}>
					<InputLabel id="demo-simple-select-label">Service</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Services"
						onChange={(e) => {
							setservice(e.target.value, (service) => {
								console.log(service);
							});

							setserviceArray(
								e.target.value == "Dry cleaning"
									? arr1
									: e.target.value == "Washing"
									? arr2
									: arr3
							);
							setchoices(serviceArray);
						}}
						value={service}
					>
						<MenuItem value="Dry cleaning">Dry cleaning</MenuItem>
						<MenuItem value="Washing">Washing</MenuItem>
						<MenuItem value="Repairing">Repairing</MenuItem>
					</Select>
				</FormControl>
				<Button
					style={{
						textTransform: "none",
						marginRight: "0",
						marginLeft: "50px",
					}}
					variant="contained"
					className={styles.save}
					onClick={saveChanges}
				>
					Save Changes
				</Button>
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
				{choices.map((x) => {
					return (
						<tr className={styles.row}>
							<th>
								{count}-{++count}
							</th>
							{x.map((y) => {
								return (
									<td>
										<input
											type="checkbox"
											id={y.key}
											checked={y.val === true ? "checked" : ""}
											onClick={(e) => {
												console.log(e.target.id);
												arr = choices.map((w) => {
													return w.map((z) => {
														if (z.key == e.target.id) {
															console.log(z.val);
															return { val: !z.val, key: z.key };
														} else {
															return z;
														}
													});
												});
												setchoices(arr);
												console.log(choices);
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
	);
}

export default SelectSlot;
