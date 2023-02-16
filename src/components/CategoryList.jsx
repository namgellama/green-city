import { Link } from 'react-router-dom';
import Card from './shared/Card';

function CategoryList({ category }) {
	return (
		<section className=" w-full lg:w-[1200px] mx-auto text-center mt-[4rem] flex flex-col items-center">
			<header>
				<h1 className="text-2xl font-semibold">Shop by Category</h1>
			</header>

			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
				{category.map((item) => (
					<Link
						className="flex flex-col items-center mx-4"
						to={`/category/${item.id}`}
						key={item.id}
					>
						<Card>
							<img
								className="w-[300px] h-[300px] object-cover mb-3"
								src={item.img}
								alt="Category image"
							/>
							<h1 className="text-2xl font-semibold mt-4">{item.title}</h1>
						</Card>
					</Link>
				))}
			</main>
		</section>
	);
}

export default CategoryList;
