import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Demands from "../pages/Demands";
import Content from "./Content";

function RouteComponent(props) {
	return (
		<Switch>
			<Route exact path="/" render={() => <Content />} />
			<Route exact path="/dashboard" render={() => <Dashboard />} />
			<Route exact path="/demands" render={() => <Demands />} />
		</Switch>
	);
}

export default RouteComponent;
