import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './redux/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  }
})
