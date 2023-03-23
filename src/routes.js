import React from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
// import Home from './features/Home/Home';
// import Products from './features/Products/Products';

const Home = loadable(() => import('./features/Home/Home'));
const Products = loadable(() => import('./features/Products/Products'));

const RouteComponent = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/products" element={<Products />} />
	</Routes>
);

export default RouteComponent;
