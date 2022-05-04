import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTea = createAsyncThunk('tea/fetchTea', async (_, _) => {
  const allTea = await axios.get('/api/allTea');
  return allTea.data;
})


export const teaSlice = createSlice({
  name: 'tea',
  initialState: {
    status: idle,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTea.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchTea.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.tea = action.payload;
    },
    [fetchTea.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  }
});

export default teaSlice.reducer
