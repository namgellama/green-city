import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import HomePage from './pages/HomePage';
import ProductData from './data/ProductData';
import CategoryData from './data/CategoryData';
import Footer from './components/layouts/Footer';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

function App() {
	const [product, setProduct] = useState(ProductData);
	const [category, setCategory] = useState(CategoryData);

	const [cart, setCart] = useState([]);

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
				<Route path="/products" element={<ProductPage product={product} />} />
				<Route
					path="/products/:id"
					element={
						<ProductDetailPage
							product={product}
							handleIncrease={increaseQuantity}
							handleDecrease={decreaseQuantity}
							handleAddToCart={addToCart}
						/>
					}
				/>
				<Route path="/contact" element={<ContactPage />} />
				<Route
					path="/cart"
					element={
						<CartPage
							cart={cart}
							setCart={setCart}
							handleIncrease={increaseQuantity}
							handleDecrease={decreaseQuantity}
						/>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
