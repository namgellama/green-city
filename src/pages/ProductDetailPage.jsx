import { useParams } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import Checkbox from '../components/shared/Checkbox';
import Rating from '../components/shared/Rating';

function ProductDetailPage({
	product,
	handleDecrease,
	handleIncrease,
	handleAddToCart,
}) {
	const { id } = useParams();

	const products = product.filter((item) => item.id === Number(id));

	return products.map((item) => (
		<section
			key={item.id}
			className="w-full lg:w-[1200px] mx-auto my-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 py-2 px-4 lg:px-2 cursor-pointer justify-center"
		>
			<div className="mb-8">
				<img
					className="lg:w-[600px] h-[600px] object-cover rounded-md"
					src={item.img}
					alt=""
				/>
			</div>

			<main className="md:px-4 lg:ml-2">
				<h1 className="text-3xl font-bold uppercase">{item.title}</h1>
				<h2 className="text-2xl font-semibold mt-2 mb-3">Rs. {item.price}</h2>
				<div className="mb-8">
					<Rating value={item.rating} text={`${item.numReviews} reviews`} />
				</div>
				{item.flavours && <Checkbox flavours={item.flavours} />}
				<div className="flex items-center mb-8 mt-10">
					<div className="flex items-center">
						<button
							className={`w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer`}
							onClick={() => handleDecrease(item)}
						>
							-
						</button>
						<div className="text-2xl mx-5">{item.quantity}</div>
						<button
							className="w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer"
							onClick={() => handleIncrease(item)}
						>
							+
						</button>
					</div>
					<button
						className="ml-8 bg-black text-white py-2 lg:py-3 px-3 lg:px-7 text-xl font-medium hover:bg-black/70"
						onClick={() => handleAddToCart(item)}
					>
						Add To Cart
					</button>
				</div>
				<div className="w-full my-5 text-lg text-justify">
					<div className="flex items-center mb-2">
						<GrCircleInformation size={25} />
						<span className="text-xl font-semibold ml-2">Description</span>
					</div>
					{item.description}
				</div>
			</main>
		</section>
	));
}

export default ProductDetailPage;
