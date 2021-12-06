import React, { useEffect, useLayoutEffect, useState } from "react";
import "../styles/Demands.css";
import sendRequest from "../config/sentRequest";
import withLoading from "../HOC/withLoading";

function Demands(props) {
	const [obj, setObj] = useState({
		pg: 0,
		nm: "",
		dr: 1,
		sr: "Moment",
		momb: "",
		mome: "",
	});

	const today = new Date().toLocaleDateString(undefined, {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	});

    useEffect(() => {
        console.log(props.data.List)
    },[])

	const fetchDemands = async () => {
		let res = await sendRequest("demands/get.php", obj);
		// setDocuments(res.List)
		console.log(res);
	};
	useEffect(() => {
		fetchDemands();
	}, []);

	return (
		<div>
			<div className="date_searce_text">
				<ul>
					<li>
						<p>Bu gün</p>
					</li>
					<li>
						<p>Dünən</p>
					</li>
					<li>
						<p>Bu ay</p>
					</li>
					<li>
						<p>Keçən ay</p>
					</li>
				</ul>
			</div>
			<div className="demands_wraper">
				<hr />
				<div className="date">{today}</div>
                { props.data ? props.data.List.map( item => {
                    return (
                        <div className="demand">
                            <div>
                                <div>1</div>
                                <div>
                                    <div>Rəşad Muradov</div>
                                    <div> Satış № 0665</div>
                                    <div>qazanc: 5.6$</div>
                                </div>
                            </div>
                            <div>
                                <div>165$</div>
                                <div>5:30</div>
                            </div>
                        </div>)
                    })
                : ''
                }
			</div>
		</div>
	);
}

// export default Demands;
export default withLoading(Demands, 'demands');
