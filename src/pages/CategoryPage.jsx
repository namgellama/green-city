import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function CategoryPage({ category, product }) {
	const { id } = useParams();

	const categories = category.filter((item) => item.id === Number(id));

	const products = product.filter((item) => item.category === Number(id));

	return categories.map((category) => (
		<section
			className=" w-full lg:w-[1200px] mx-auto text-center mt-4 flex flex-col items-center"
			key={category.id}
		>
			<header>
				<h1 className="text-4xl font-bold">{category.title}</h1>
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
								<h1 className="text-2xl font-semibold">{item.title}</h1>
								<p className="text-xl font-semibold">Rs. {item.price}</p>
							</div>
						</Card>
					</Link>
				))}
			</main>
		</section>
	));
}

export default CategoryPage;
