import { fetchAdvents } from '../api/advent-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAdvents = createAsyncThunk('advents/fetchAll', () => {
	const data = fetchAdvents();
	return data;
});
