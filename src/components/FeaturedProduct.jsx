import { Link } from 'react-router-dom';
import Rating from './shared/Rating';
import Card from './shared/Card';

function FeaturedProduct({ product }) {
	const result = product.filter((item) => item.featured === true);
	const products = [...result];

	return (
		<section className=" w-full lg:w-[1200px] mx-auto text-center mt-[4rem] flex flex-col items-center">
			<header>
				<h1 className="text-2xl font-semibold">Featured Products</h1>
				<Link
					className="text-xl text-red-500 hover:text-red-300"
					to="/products"
				>
					Shop More <span>&rarr;</span>
				</Link>
			</header>

			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
				{products.map((item) => (
					<Link
						className="flex flex-col items-center mx-4"
						to={`/products/${item.id}`}
						key={item.id}
					>
						<Card>
							<img
								className="w-[300px] h-[300px] object-cover mb-3"
								src={item.img}
								alt="Featured product image"
							/>
							<div className="flex flex-col items-center mt-5">
								<Rating value={item.rating} />
								<h1 className="text-2xl font-semibold mt-3">{item.title}</h1>
								<p className="text-xl font-semibold">Rs. {item.price}</p>
							</div>
						</Card>
					</Link>
				))}
			</main>
		</section>
	);
}

export default FeaturedProduct;
