import scss from './ProductModal.module.scss';

const ProductModal = ({ data }) => {
	console.log(data);
	return (
		<div className={scss.wrapper_modal}>
			<div className={scss.title}>{data.name}</div>
			<div className={scss.titleRatingLocation}>
				<div className={scss.titleRating}>
					{data.rating} ({data.reviews.length} reviews)
				</div>
				<div className={scss.dataLocation}>{data.location}</div>
			</div>
			<div className={scss.price}>€{data.price}</div>
			<div className={scss.list_images}>
				{data.gallery.map((image, index) => (
					<img
						className={scss.image}
						key={index}
						src={image}
						alt={data.name}
					/>
				))}
				<div className={scss.description}>{data.description}</div>
			</div>
		</div>
	);
};

export default ProductModal;
