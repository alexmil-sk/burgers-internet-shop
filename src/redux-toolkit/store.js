import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slices/filtersSlice.js';


export const store = configureStore({
  reducer: {
    filter: filtersReducer,
  },
})
