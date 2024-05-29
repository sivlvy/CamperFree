import Equipment from './Equipment/Equipment';

import scss from './Filters.module.scss';

const Filters = () => {
	return (
		<div className={scss.wrapper}>
			<h3 className={scss.title}>Filters</h3>
			<Equipment />
		</div>
	);
};

export default Filters;
