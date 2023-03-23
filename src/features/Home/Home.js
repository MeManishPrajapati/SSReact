import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from './reducer';
import { Link } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();

	const count = useSelector((state) => state.home.counter);

	return (
		<>
			<h1>Home page</h1>
			<button onClick={() => dispatch(increaseCounter())}>Inc count</button>
			<div>This count is {count}</div>
			<button onClick={() => dispatch(decreaseCounter())}>Dec count</button>
			<Link to={'/products'}>Products</Link>
		</>
	);
};

export const getServerSideProps = (state, dispatch) => {
	dispatch(decreaseCounter());
};

export default Home;
