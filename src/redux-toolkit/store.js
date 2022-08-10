import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slices/filtersSlice.js';
import cartReducer from './slices/cartSlice.js';


export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    cart: cartReducer,
  },
})
