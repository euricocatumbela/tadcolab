import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/index";
import Academic from "../Academic/index";
import Pricing from "../Pricing/index";
import Tutoring from "../Tutoring/index";
import Signin from "../Authentication/Signin/index";
import Signup from "../Authentication/signup/index";
import Tutor from "../../Dashboard/User/Tutor/index";
import Student from "../../Dashboard/User/Student/index";
import HomeDash from "../../Dashboard/Navigation/HomeDash/index";
import Users from "../../Dashboard/Navigation/ManageUSers/index";
import ManageCourse from "../../Dashboard/Navigation/ManageCourse/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/academic" component={Academic} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/tutoring" component={Tutoring} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/tutor" component={Tutor} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/homedash" component={HomeDash} />
        <Route exact path="/managecourse" component={ManageCourse} />
      </Switch>
    </Router>
  );
}

export default App;
