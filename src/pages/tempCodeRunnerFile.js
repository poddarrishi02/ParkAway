import axios from "axios";
import React from "react";
import AdminDash from "../components/AdminDash";
import UserDash from "../components/UserDash";
import WorkerDash from "../components/WorkerDash";
import styles from "../styles/dashboard.module.css";
function Dashboard({ access, setAccess }) {
	const [userData, setUserData] = React.useState({});
	const [staffData, setStaffData] = React.useState({});
	React.useEffect(async () => {
		if (access.user) {
			console.log(JSON.parse(localStorage.getItem("user")))
			await axios.post("http://localhost:8080/user/getUser", JSON.parse(localStorage.getItem("user")))
				.then((res) => {
					setUserData(res.data);
					localStorage.clear();
					localStorage.setItem("user", JSON.stringify(res.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
		if (access.staff) 
		{
			let req = {
				url : "http://localhost:8080/staff/getStaff" ,
				method: 'POST',
				data: JSON.parse(localStorage.getItem('staff'))
			  }
			await axios(req)
					.then((res) => {
						setStaffData(res.data);
						localStorage.clear();
						localStorage.setItem("staff", JSON.stringify(res.data));
					})
					.catch((err) => {
						console.log(err);
					});
		}
	}, []);
	return (
		<div className={styles.outer}>
			{access.admin ? (
				<AdminDash setAccess={setAccess} access={access} />
			) : access.staff ? (
				<WorkerDash staffData={staffData} setStaffData={setStaffData} access={access} setAccess={setAccess} />
			) : (
				<UserDash userData={userData} setUserData={setUserData} access={access} setAccess={setAccess} />
			)}
		</div>
	);
}

export default Dashboard;
