import React from 'react';
import CategoryList from '../components/CategoryList';
import FeaturedProduct from '../components/FeaturedProduct';
import Showcase from '../components/Showcase';

function HomePage({ product, category }) {
	return (
		<>
			<Showcase />
			<CategoryList category={category} />
			<FeaturedProduct product={product} />
		</>
	);
}

export default HomePage;
