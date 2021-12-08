import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useState } from "react";
import styles from "../styles/dashboard/addWorker.module.css";
import axios from "axios";

function AddWorker() {
	const [worker, setWorker] = useState([]);
	const [acworkers, setacworkers] = useState([]);
	const [inacworkers, setinacworkers] = useState([]);
	React.useEffect(() => {
		axios.get("http://localhost:8080/admin/editStaff").then((res) => {
			setWorker(res.data);
			setacworkers(res.data[0]);
			setinacworkers(res.data[1]);
		});
	}, []);

	const upDate_backend = () => {};

	return (
		<div className={styles.outer}>
			<div className={styles.top}>
				<div className={styles.title}>Manage worker</div>
				<div className={styles.save}>
					<Button
						variant="contained"
						startIcon={
							<SaveIcon
								style={{
									width: "2vw",
									height: "5vh",
									fontWeight: "bolder",
									fill: "white",
								}}
							/>
						}
						onClick={(e) => {}}
					>
						<div className={styles.saveText}>Save</div>
					</Button>
				</div>
			</div>
			<div className={styles.tablecontainer}>
				<div className={styles.manage}>
					<div className={styles.manageTitle}>Remove Worker</div>
					{acworkers?.length == 0 ? (
						<div className={styles.defaultmsg}>No worker</div>
					) : (
						<table>
							<thead>
								<th>Worker Name</th>
								<th>Status</th>
								<th>Action</th>
							</thead>
							<tbody>
								
								{acworkers?.map((w) => {
									return (
										<tr>
											<td className={styles.tablecontent} data-label="name">
												{w?.userName}{" "}
											</td>
											<td className={styles.status} data-label="war">
												Active
											</td>
											<td data-label="ba">
												<div className={styles.deact}>
													<Button
														style={{ width: "9vw" }}
														variant="contained"
														startIcon={
															<IndeterminateCheckBoxIcon
																style={{ fill: "white" }}
															/>
														}
														onClick={(e) => {
															var arr1=[],arr2=[];
															inacworkers.map((w)=>{
																arr1.push(w);
															});
															acworkers.map((w)=>{
																if (w.id==e.target.id) {
																	arr1.push(w);
																}
																else{
																	arr2.push(w);
																}
															});
															setinacworkers(arr1);
															setacworkers(arr2);
															// send request to backend with temp1 to delete the staff
														}}>
														Deactivate
													</Button>
												</div>

												<Button
													id={w?.id}
													style={{ width: "9vw" }}
													variant="contained"
													startIcon={<DeleteIcon style={{ fill: "white" }} />}
													onClick={(e) => {
														var temp1 = inacworkers;
														var temp2 = acworkers.filter(
															(w) => w?.id === e.target.id
														);
														var temp3 = acworkers.filter(
															(w) => w?.id != e.target.id
														);
														temp1.push(temp2[0]);
														setWorker([temp3, temp1], () => {
															console.log(worker);
														});

														// send request to backend with temp1 to delete the staff
													}}
												>
													Remove
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
				<div className={styles.manage}>
					<div className={styles.manageTitle}>Add worker</div>
					{worker[1]?.length == 0 ? (
						<div>No worker</div>
					) : (
						<table>
							<thead>
								<th>Worker Name</th>
								<th>Status</th>
								<th>Action</th>
							</thead>
							<tbody>
								{inacworkers?.map((w) => {
									return (
										<tr>
											<td className={styles.tablecontent} data-label="name">
												{w?.userName}{" "}
											</td>
											<td className={styles.instatus} data-label="war">
												Inactive
											</td>
											<td data-label="ba">
												<div className={styles.deact}>
													<Button
														id={w?.id}
														style={{ width: "7vw" }}
														variant="contained"
														startIcon={<AddIcon style={{ fill: "white" }} />}
														onClick={(e) => {
															var temp1 = acworkers;
															var temp2 = inacworkers.filter(
																(w) => w?.id === e.target.id
															);
															var temp3 = inacworkers.filter(
																(w) => w?.id != e.target.id
															);
															temp1.push(temp2[0]);
															setWorker([temp1, temp3], () => {
																console.log(worker);
															});

															// send request to backend with temp2 data to update the backend
														}}
													>
														Add
													</Button>
												</div>
												<Button
													id={w?.id}
													style={{ width: "7vw" }}
													variant="contained"
													startIcon={<DeleteIcon style={{ fill: "white" }} />}
													onClick={(e) => {
														var temp1 = inacworkers.filter(
															(w) => w?.id === e.target.id
														);
														var temp2 = inacworkers.filter(
															(w) => w?.id != e.target.id
														);
														var temp3 = acworkers;
														setWorker([temp3, temp2]);
														console.log(worker);
														// send request to backend with temp1 to delete the staff
													}}
												>
													Remove
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}

export default AddWorker;
