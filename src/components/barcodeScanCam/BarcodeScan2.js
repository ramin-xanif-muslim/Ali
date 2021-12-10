import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function BarcodeScan2() {
	const [data, setData] = useState("Captura : ...");
	const [show, setShow] = useState(false);

	const onUpdateScreen = (err, result) => {
		if (result) {
			setData(result.text);
			setShow(false);
		} else {
			setData("Not Found");
		}
	};

	return (
		<div className="App">
			<h1>React Scan BarCode</h1>
			<p>Presione el boton capturar</p>
			<>
				{show && (
					<BarcodeScannerComponent
						width={500}
						height={500}
						onUpdate={(err, result) => onUpdateScreen(err, result)}
					/>
				)}
				<p>{data}</p>
			</>
			<div>
				<button onClick={() => setShow(true)}> Capturar </button>
			</div>
		</div>
	);
}

export default BarcodeScan2;
