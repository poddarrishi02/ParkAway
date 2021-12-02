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
				<Route exact path="/user" component={Userlogin} />
				<Route exact path="/adminlogin" component={Adminlogin} />
				<Route exact path="/usernew" component={Usernew} />
				<Route exact path="/staff" component={Stafflogin} />
				<Route exact path="/staffnew" component={Staffnew} />
				<Route exact path="/dashboard">
					<Dashboard access={access} />
				</Route>
				<Route exact path="/verify" component={OtpVerif} />
			</Switch>
		</Router>
	);
}

export default App;
