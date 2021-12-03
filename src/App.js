import React, { useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/user">
					<Userlogin access={access} setAccess={setAccess} />
				</Route>
				<Route exact path="/adminlogin">
					<Adminlogin access={access} setAccess={setAccess} />
				</Route>
				<Route exact path="/usernew">
					<Usernew/>
				</Route>
				<Route exact path="/staff">
					<Stafflogin access={access} setAccess={setAccess} />
				</Route>
				<Route exact path="/staffnew" component={Staffnew}>
				</Route>
				<Route exact path="/dashboard">
					<Dashboard access={access} />
				</Route>
				<Route exact path="/verify" component={OtpVerif} />
			</Switch>
		</Router>
	);
}

export default App;
