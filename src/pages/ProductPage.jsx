import ProductItem from '../components/ProductItem';

function ProductPage({ product }) {
	return (
		<section name="products" className="w-full text-center my-4">
			<header className="my-6">
				<h1 className="text-4xl font-semibold">All Products</h1>
			</header>
			<div className="container lg:w-[1400px] mx-auto">
				<div className="container text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{product.map((item) => (
						<ProductItem key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ProductPage;
