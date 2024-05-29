import { Link, NavLink } from 'react-router-dom';

import scss from './Header.module.scss';
const Header = () => {
	return (
		<div className={scss.header}>
			<div className={scss.header_logo}>
				<Link to="/">Logo</Link>
			</div>
			<div className={scss.header_links}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/catalog">Catalog</NavLink>
				<NavLink to="/favorites">Favorites</NavLink>
			</div>
		</div>
	);
};

export default Header;
