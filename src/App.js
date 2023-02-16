import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import HomePage from './pages/HomePage';
import ProductData from './data/ProductData';
import CategoryData from './data/CategoryData';
import Footer from './components/layouts/Footer';

function App() {
	const [product, setProduct] = useState(ProductData);
	const [category, setCategory] = useState(CategoryData);

	const increaseQuantity = (item) => {
		const products = [...product];
		const index = products.indexOf(item);
		products[index] = { ...item };
		products[index].quantity++;
		setProduct(products);
	};

	const decreaseQuantity = (item) => {
		const products = [...product];
		const index = products.indexOf(item);
		products[index] = { ...item };
		if (products[index].quantity > 1) {
			products[index].quantity--;
			setProduct(products);
		}
	};

	const addToCart = (item) => {
		// let isPresent = false;
		// cart.forEach((product) => {
		// 	if (item.id === product.id) isPresent = true;
		// });
		// if (isPresent) return;
		// setCart([...cart, item]);
	};

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<HomePage product={product} category={category} />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
