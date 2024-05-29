import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import FavoritesPage from 'pages/FavoritesPage';
import CatalogPage from 'pages/CatalogPage';
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="catalog" element={<CatalogPage />} />
				<Route path="favorites" element={<FavoritesPage />} />
			</Route>
		</Routes>
	);
};

export default App;
