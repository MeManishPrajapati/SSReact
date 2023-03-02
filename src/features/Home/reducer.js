import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	initialState: {
		counter: 0,
	},
	name: 'home',
	reducers: {
		increaseCounter: (state) => {
			state.counter++;
		},
		decreaseCounter: (state) => {
			state.counter--;
		},
	},
});

export const { decreaseCounter, increaseCounter } = homeSlice.actions;

export default homeSlice.reducer;
