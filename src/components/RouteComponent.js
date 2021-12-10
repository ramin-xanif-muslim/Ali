import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Dashboards from "../pages/Dashboards";
import Demands from "../pages/Demands";
import Document from "../pages/Document";
import Documents from "../pages/Documents";
import LoginPage from "../pages/LoginPage";
import BarcodeScan2 from "./barcodeScanCam/BarcodeScan2";
import BarcodeScane from "./barcodeScanCam/BarcodeScane";
import Content from "./Content";
import TabContends from "./TabContends";

function RouteComponent(props) {
	return (
		<Routes>
			<Route path="login" element={<LoginPage />} />
			<Route path="/" element={<Content />} />
			<Route path="/dashboards" element={<Dashboards />} />
			<Route path="/demands" element={<Demands />} />
			{/* <Route path="/documents" element={<Documents />} /> */}
			<Route path="/document" element={<TabContends />} />

			<Route path="/documents" element={<BarcodeScane />} />
			<Route path="/products" element={<BarcodeScan2 />} />
			{/* <Route path="*" element={<Navigate to='/' />} /> */}
		</Routes>
	);
}

export default RouteComponent;
