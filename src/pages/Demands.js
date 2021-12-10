import React, { useEffect, useState } from "react";
import "../styles/Demands.css";
import SearchByDate from "../components/SearchByDate";
import SearchInput from "../components/UI/searcinput/SearchInput";
import { useGlobalContext } from "../config/context";
import { api } from "../api/api";
import MyLoading from "../components/UI/loading/MyLoading";
import { useNavigate } from "react-router";
import withLoading from "../HOC/withLoading";
import { Link } from "react-router-dom";

function Demands(props) {

    // const [ barcode, setBarcode ] = useState([])

	const { isSearch, hideFooter } = useGlobalContext();
	const navigate = useNavigate();

	const [demands, setDemands] = useState();
	const [isLoading, setLoading] = useState(false);
	const [obj, setObj] = useState({
		pg: 0,
		nm: "",
		dr: 1,
		sr: "Moment",
		momb: "",
		mome: "",
	});

	useEffect(() => {
		fetchDemands();
		hideFooter();
	}, []);

	const fetchDemands = async () => {
		setLoading(true);
		let res = await api.fetchDemands(obj);
		setDemands(res);
		setLoading(false);
	};

	const getSearcObjByDate = (ob) => {
		setObj(ob);
		fetchDemands();
	};
	const fetchSearchTerm = async (searchTerm) => {
		let searchObj = obj;
		searchObj.nm = searchTerm;
		let res = await api.fetchDemands(searchObj);
		setDemands(res);
	};
	if (isLoading) {
		return <MyLoading />;
	}
    // const barcodeCam = (e) => {
    //     console.log(e.date)
    //     setBarcode([...barcode, e.date])
    // }

	return (
		<div>
			<SearchByDate obj={obj} getSearcObjByDate={getSearcObjByDate} />

            
			{/* <input
            // onChange={e => setBarcode([...barcode, e.date])}
            onChange={e => barcodeCam(e)}
				accept="image/*"
				id="icon-button-file"
				type="file"
				capture="environment"
			/>
            <p>{barcode ? barcode : 'not found'}</p> */}

			{isSearch && <SearchInput fetchSearchTerm={fetchSearchTerm} />}

			<DemandList demands={demands} />

			<div className="document-footer">
				<div className="text">
					<p className="amount">Məbləğ</p>
					<p className="profit">Qazanc</p>
				</div>
				<div className="create-button">
					<button>
						<p>+</p>
					</button>
				</div>
				<div className="number">
					<p className="amount">458</p>
					<p className="profit">152</p>
				</div>
			</div>
		</div>
	);
}

export default withLoading(Demands, "demands");

const DemandList = ({ demands }) => {
	const today = new Date().toLocaleDateString(undefined, {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	});

	return (
		<div className="demands_wrapper">
			{demands
				? demands.List.map((item, index) => {
						return (
							<Demand
								key={item.Name}
								item={item}
								index={index + 1}
							/>
						);
				  })
				: ""}
			{demands
				? demands.List.map((item, index) => {
						return (
							<Demand
								key={item.Name}
								item={item}
								index={index + 1}
							/>
						);
				  })
				: ""}
			{demands
				? demands.List.map((item, index) => {
						return (
							<Demand
								key={item.Name}
								item={item}
								index={index + 1}
							/>
						);
				  })
				: ""}
		</div>
	);
};

const Demand = ({ item, index }) => {
    const { getDocumentsItem } = useGlobalContext()
	const { CustomerName, Name, Amount, Moment } = item;
    const onClick = () => {
        getDocumentsItem(item);
    };
	return (
		<Link key={Name} to="/document" style={{ color: "inherit" }}>
			<div className="demand" onClick={onClick}>
				<div className="index">
					<p>{index}</p>
				</div>
				<hr></hr>
				<div className="demand-inner">
					<div className="demand-text">
						<p className="name">{CustomerName}</p>
						<div>
							<p className="moment">{Moment}</p>
							<p className="no">№{Name}</p>
						</div>
					</div>
					<div className="demand-price">
						<p className="amount">
							{Math.round(Amount * 100) / 100}
							<sub>₼</sub>
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
