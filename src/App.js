import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Userlogin from "./pages/userlogin";
import Usernew from "./pages/usernew";
import Stafflogin from "./pages/stafflogin";
import Adminlogin from "./pages/adminlogin";
import Staffnew from "./pages/staffnew";
import Dashboard from "./pages/dashboard";
import OtpVerif from "./pages/otpVerif";
function App() {
	const [access, setAccess] = useState({
		admin: false,
		staff: false,
		user: false,
	});
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route
					exact
					path="/user"
					element={<Userlogin access={access} setAccess={setAccess} />}
				/>
				<Route
					exact
					path="/adminlogin"
					element={<Adminlogin access={access} setAccess={setAccess} />}
				/>
				<Route exact path="/usernew" element={<Usernew />} />
				<Route
					exact
					path="/staff"
					element={<Stafflogin access={access} setAccess={setAccess} />}
				></Route>
				<Route exact path="/staffnew" element={<Staffnew />} ></Route>
				<Route
					exact
					path="/dashboard"
					element={<Dashboard access={access} setAccess={setAccess} />}
				></Route>
				<Route exact path="/verify" element={<OtpVerif />} />
			</Routes>
		</Router>
	);
}

export default App;
