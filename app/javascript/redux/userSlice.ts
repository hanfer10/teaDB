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

