<<<<<<< HEAD
import React from 'react'
import AdminDash from '../components/AdminDash'
import UserDash from '../components/UserDash';
import WorkerDash from '../components/WorkerDash';
import styles from '../styles/dashboard.module.css'
function Dashboard() {
    var isAdmin=true;
    var isWorker=true;
    // var isUser=false;
    return (
        <div className={styles.outer}>
            {isAdmin?<AdminDash/>:isWorker?<WorkerDash/>:<UserDash/>}
        </div>
    )
=======
import axios from "axios";
import React from "react";
import AdminDash from "../components/AdminDash";
import UserDash from "../components/UserDash";
import WorkerDash from "../components/WorkerDash";
import styles from "../styles/dashboard.module.css";
import { useLocation } from "react-router-dom";
function Dashboard({ access, setAccess }) {
	const [userData, setUserData] = React.useState();
	const [staffData, setStaffData] = React.useState();
	
	React.useEffect(() => {
		if (access.user) {
			axios
				.post("http://localhost:8080/user/getUser")
				.then((res) => {
					setUserData(res.data);
					localStorage.clear();
					localStorage.setItem("user", res.data);
;				})
				.catch((err) => {
					console.log(err);
				});
		} else if (access.staff) {
			axios
				.post("http://localhost:8080/staff/getStaff")
				.then((res) => {
					setStaffData(res.data);
					localStorage.clear();
					localStorage.setItem("staff", JSON.stringify(res.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
		else
		{
			setAccess({...access, admin: true});
		}

	}, []);
	return (
		<div className={styles.outer}>
			{access.admin ? (
				<AdminDash setAccess={setAccess} access={access} />
			) : access.staff ? (
				<WorkerDash
					staffData={staffData}
					setStaffData={setStaffData}
					access={access}
					setAccess={setAccess}
				/>
			) : (
				<UserDash
					userData={userData}
					setUserData={setUserData}
					access={access}
					setAccess={setAccess}
				/>
			)}
		</div>
	);
>>>>>>> 85324acf53760a9c31c54c6fc81783aae74132f2
}

export default Dashboard;
