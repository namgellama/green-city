import { useState, createContext } from 'react';

function CartPage({ cart, setCart, handleIncrease, handleDecrease }) {
	const result = cart.map((item) => console.log(item.flavours[0]));
	const CartContext = createContext({
		items: [],
	});

	return (
		<section className="w-[1000px] mx-auto my-8">
			<table className="table-auto w-full text-center">
				<thead className="border-b border-gray-300">
					<tr>
						<th></th>
						<th className="py-3">Item</th>
						<th className="py-3">Flavour</th>
						<th className="py-3">Quantity</th>
						<th className="py-3"></th>
						<th className="py-3">Price</th>
					</tr>
				</thead>
				{cart.map((item) => (
					<tbody key={item.id}>
						<tr className="border-b border-gray-300">
							<td className="flex justify-center">
								<img
									className="w-[60px] h-[60px] object-cover"
									src={item.img}
									alt=""
								/>
							</td>
							<td className="py-3">
								<h1 className="ml-2 text-xl font-semibold">{item.title}</h1>
							</td>
							<td className="py-3"></td>
							<td>
								<div className="flex items-center justify-center">
									<button
										className={`w-[40px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer`}
										onClick={() => handleDecrease(item)}
									>
										-
									</button>
									<div className="text-2xl mx-5">{item.quantity}</div>
									<button
										className="w-[40px]  text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer"
										onClick={() => handleIncrease(item)}
									>
										+
									</button>
								</div>
							</td>
							<td className="py-3">X</td>
							<td className="py-3">{item.price}</td>
						</tr>
						{/* <tr className="border-b border-gray-300">
						<td className="py-3">Cheetos</td>
						<td className="py-3">Cheese</td>
						<td className="py-3">1</td>
						<td className="py-3">X</td>
						<td className="py-3">Rs 100</td>
					</tr> */}
					</tbody>
				))}
			</table>
		</section>
	);
}

export default CartPage;
