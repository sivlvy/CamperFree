import scss from './productItem.module.scss';

const ProductsItem = ({ data }) => {
	console.log(data);
	const shortDescription =
		data.description.length > 100
			? data.description.slice(0, 100) + '...'
			: data.description;
	return (
		<li className={scss.list_item}>
			<img
				className={scss.item_img}
				src={data.gallery[0]}
				alt={data.name}
			/>
			<div className={scss.item}>
				<div className={scss.titleNamePrice}>
					<h2 className={scss.titleName}>{data.name}</h2>
					<p className={scss.titlePrice}>€{data.price}</p>
				</div>
				<p className={scss.rating}>
					{data.rating} ({data.reviews.length} reviews)
				</p>
				<p className={scss.location}>{data.location}</p>
				<p className={scss.description}>{shortDescription}</p>
				<ul className={scss.facilities}>
					<li className={scss.facilities_item}>
						<p className={scss.facilities_descr}>
							{data.adults} adults
						</p>
					</li>
					<li className={scss.facilities_item}>
						<p className={scss.facilities_descr}>
							{data.transmission}
						</p>
					</li>
					<li className={scss.facilities_item}>
						<p className={scss.facilities_descr}>{data.engine}</p>
					</li>
					<li className={scss.facilities_item}>
						<p className={scss.facilities_descr}>Kitchen</p>
					</li>
					<li className={scss.facilities_item}>
						<p className={scss.facilities_descr}>
							{data.details.beds} beds
						</p>
					</li>
				</ul>
			</div>
		</li>
	);
};

export default ProductsItem;
