import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    cart: cartSlice,
    pizza: pizzaSlice
  },
})
