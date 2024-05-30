import scss from './productItem.module.scss';

import Modal from 'react-modal';

import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';

const ProductsItem = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

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
				<div className={scss.itemRatingLocation}>
					<p className={scss.rating}>
						{data.rating} ({data.reviews.length} reviews)
					</p>
					<p className={scss.location}>{data.location}</p>
				</div>
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
				<button className={scss.btn} onClick={openModal}>
					See more
				</button>
				<Modal
					isOpen={isModalOpen}
					onRequestClose={closeModal}
					className={scss.custom_modal}
					overlayClassName={scss.custom_overlay}
				>
					<ProductModal data={data} />
				</Modal>
			</div>
		</li>
	);
};

export default ProductsItem;
