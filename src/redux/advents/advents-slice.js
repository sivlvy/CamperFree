import { createSlice } from '@reduxjs/toolkit';

import { getAdvents } from './advents-operations';

const initialState = {
	items: [],
	isLoading: false,
	isError: null,
};

const adventsSlice = createSlice({
	name: 'advents',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAdvents.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAdvents.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(getAdvents.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = payload;
			});
	},
});

export default adventsSlice.reducer;
