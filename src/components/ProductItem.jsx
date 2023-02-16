import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import Rating from '../components/shared/Rating';

function ProductItem({ item }) {
	return (
		<Link
			className="flex flex-col items-center mx-4"
			to={`/products/${item.id}`}
			key={item.id}
		>
			<Card>
				<img
					className="w-[300px] h-[300px] object-cover mb-3"
					src={item.img}
					alt="Product image"
				/>
				<div className="flex flex-col items-center mt-5">
					<Rating value={item.rating} />
					<h1 className="text-2xl font-semibold mt-3">{item.title}</h1>
					<p className="text-xl font-semibold">Rs. {item.price}</p>
				</div>
			</Card>
		</Link>
	);
}

export default ProductItem;
