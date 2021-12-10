import React from "react";
import {Barcode} from './Barcode';
import Webcam from './react-webcam';

function BarcodeScane() {
	return (
        <div>
          <Barcode/>
          <Webcam />
        </div>
	);
}

export default BarcodeScane;
