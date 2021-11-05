import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './components/button/buttonSlice';

export default configureStore({
  reducer: {
    data: buttonReducer
  }
})