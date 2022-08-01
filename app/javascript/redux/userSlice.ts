import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signin = createAsyncThunk('users/signin', async (params) => {
  const data = {
    username: params.username,
    password: params.password
  }

  const response = await axios.post('users/sign_in', data);
  if (response.status != 200) {
    console.log('authentication failed');
    return undefined;
  }
  return response.data;
})

export const register = createAsyncThunk('users/register', async (params) => {
  const data;
  data.user = {
    username: params.username,
    password: params.password,
    email: params.email
  }

  const response = await axios.post('/users', data);
  return response.data;
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
    status: 'idle'
  },
  reducers: {
    setUser: (state, action) => action.payload
  },
  extraReducers: {

  },
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
