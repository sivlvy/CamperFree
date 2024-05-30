import ProductsItem from './ProductsItem/ProductsItem';
import scss from './products.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAdvents } from '../../../redux/advents/advents-operations';

const Products = () => {
	const dispatch = useDispatch();
	const [loadedProducts, setLoadedProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 4;

	const products = useSelector((state) => state.advents.items);

	useEffect(() => {
		dispatch(getAdvents());
	}, [dispatch]);

	useEffect(() => {
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = Math.min(startIndex + pageSize, products.length);
		setLoadedProducts(products.slice(0, endIndex));
	}, [products, currentPage, pageSize]);

	const handleLoadMore = () => {
		setCurrentPage(currentPage + 1);
	};

	return (
		<ul className={scss.products_wrapper}>
			{loadedProducts.map((product) => (
				<ProductsItem key={product.id} data={product} />
			))}
			{products.length > loadedProducts.length && (
				<button onClick={handleLoadMore}>Завантажити ще</button>
			)}
		</ul>
	);
};

export default Products;
