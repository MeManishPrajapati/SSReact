import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from './reducer';

const Home = () => {
	const dispatch = useDispatch();

	const count = useSelector((state) => state.home.counter);

	return (
		<>
			<h1>Home page</h1>
			<button onClick={() => dispatch(increaseCounter())}>Inc count</button>
			<div>This count is {count}</div>
			<button onClick={() => dispatch(decreaseCounter())}>Dec count</button>
		</>
	);
};

export default Home;
