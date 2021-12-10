import React, { useState } from "react";
import withLoading from "../HOC/withLoading";
import MyModal from "./UI/modal/MyModal";

function ProductListForSelect(props) {
	const [modal, setModal] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [item, setItem] = useState("");
	const [indexProductList, setIndexProductList] = useState(null);

	const select = () => {
		let arr = props.data.List.filter((p) => p.checkedBox === true);
		props.selectPrd(arr);
	};

	const putQuantity = () => {
		props.data.List[indexProductList].Quantity = quantity;
		setModal(false);
		setQuantity(1);
        select()
	};

	return (
		<div style={{background:'red'}} >
			<h3>Məhsullar</h3>
			<button onClick={select}>OK</button>
			<ProductList
				setModal={setModal}
				setIndexProductList={setIndexProductList}
				setItem={setItem}
				products={props.data ? props.data.List : []}
			/>
			<MyModal visible={modal} setVisible={setModal} >
				<div>
					<h2>Ededin sayini bildirin</h2>
					<div>
						<button
							onClick={() => setQuantity(quantity - 1)}
							style={{
								fontSize: "30px",
								backgroundColor: "greenyellow",
							}}
						>
							-
						</button>
						<input
							value={quantity}
							min="0"
							onChange={(e) => setQuantity(Number(e.target.value))}
							style={{
								textAlign: "center",
								fontSize: "30px",
								height: "60px",
								width: "100%",
								border: "none",
							}}
							type="number"
						/>
						<button
							onClick={() => setQuantity(quantity + 1)}
							style={{
								fontSize: "30px",
								backgroundColor: "greenyellow",
							}}
						>
							+
						</button>
					</div>
					<div style={{ justifyContent: "space-between" }}>
						<button onClick={putQuantity}>Testigle</button>
					</div>
				</div>
			</MyModal>
		</div>
	);
}

export default withLoading(ProductListForSelect, "products");

const ProductList = ({ products, setModal, setIndexProductList, setItem }) => {
	return (
		<div>
			{products ? (
				products.map((item, index) => {
					const { Id, Name } = item;

					const handelCheckBox = (e) => {
						item.checkedBox = e.target.checked;
						setItem(item);
						e.target.checked && setModal(true);
					};
					const getProductId = () => {
						setIndexProductList(index);
					};

					return (
						<div key={Id} onClick={getProductId}>
							<div>
								<div>
									<p>
										{index + 1}.{Name}
									</p>
								</div>
								<div>
									<input
										type="checkbox"
										onChange={handelCheckBox}
									/>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<p>Mehsullar yoxdur</p>
			)}
		</div>
	);
};

// const EditQuantityModal = () => {
//     return (
//         <div>
//             <h2>Ededin sayini bildirin</h2>
//             <div>
//                 <button onClick={() => setEded(eded - 1)} style={{fontSize:'30px',backgroundColor:'greenyellow'}}>-</button>
//                 <input value={eded} min='0' onChange={(e) => setEded(Number(e.target.value))}
//                 style={{textAlign: 'center',fontSize:'30px',height:'60px',width:'100%', border:'none'}}
//                 type='number'/>
//                 <button onClick={() => setEded(eded + 1)} style={{fontSize:'30px',backgroundColor:'greenyellow'}}>+</button>
//             </div>
//             <div style={{justifyContent: 'space-between'}}>
//                 <button onClick={putQuantity}>Testigle</button>
//             </div>
//         </div>
//     )
// }
