import Filters from './Filters/Filters';
import Products from './Products/Products';
import Container from 'components/Container/Container';

import scss from './catalog.module.scss';

const Catalog = () => {
	return (
		<Container>
			<div className={scss.wrapper}>
				<Filters />
				<Products />
			</div>
		</Container>
	);
};

export default Catalog;
