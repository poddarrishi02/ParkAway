import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/homepage";
import Userlogin from './pages/userlogin';
import Usernew from './pages/usernew';
import Stafflogin from './pages/stafflogin';
import Adminlogin from './pages/adminlogin';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/user" component={Userlogin} />
        <Route exact path="/admin" component={Adminlogin} />
        <Route exact path="/usernew" component={Usernew} />
        <Route exact path="/staff" component={Stafflogin} />
      </Switch>
    </Router>
  );
}

export default App;
