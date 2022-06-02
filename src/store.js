import { configureStore } from '@reduxjs/toolkit';

// import './features/cart/cartSlice';
//Default import any name can be used
import cartReducer from './features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
