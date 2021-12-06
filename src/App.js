import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "antd/dist/antd.css";
import RouteComponent from "./components/RouteComponent";
import MyModal from "./components/UI/modal/MyModal";
import "./styles/Content.css";

function App() {
	const [modal, setModal] = useState(false);
	// const [isArrow, setIsArrow] = useState(false);
	return (
		<div className="App">

			<Header openSidebar={setModal} />

			<div className="content">
				<RouteComponent />
			</div>

			<Footer />

			<MyModal visible={modal} setVisible={setModal}>
				<SideBar isSidebarOpen={modal} />
			</MyModal>

		</div>
	);
}

export default App;
