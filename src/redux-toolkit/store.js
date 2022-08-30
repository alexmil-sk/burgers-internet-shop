import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slices/filtersSlice.js';
import cartReducer from './slices/cartSlice.js';
import burgerReducer from './slices/burgersSlice.js';

export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    cart: cartReducer,
    burgers: burgerReducer,
    
  },
})
