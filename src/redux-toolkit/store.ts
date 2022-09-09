import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters/filtersSlice.js';
import cartReducer from './cart/cartSlice.js';
import burgerReducer from './burgers/burgersSlice.js';
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    cart: cartReducer,
    burgers: burgerReducer,
    
  },
})

export type RootState = ReturnType<typeof store.getState>


type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
