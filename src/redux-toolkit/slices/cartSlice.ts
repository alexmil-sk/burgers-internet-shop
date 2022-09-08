import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICartSliceState} from "../../@types/interfaces";
import {RootState} from "../store";
import {BurgerInfo} from "../../@types/types";



const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  
  reducers: {
    addItemBurger(state, action: PayloadAction<BurgerInfo>) {
      
      const findItem = state.items.find(item =>
          item.id === action.payload.id
      //item.id === action.payload.id && item.size === action.payload.size && item.type === action.payload.type
      );
      
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({...action.payload, count: 1});
      }
      
      state.totalPrice = state.items.reduce((accum, item) => {
        return accum + (item['price'] * item.count);
      }, 0)
    },
    removeItemBurger(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      state.totalPrice = state.items.reduce((accum, item) => {
        return accum + (item['price'] * item.count);
      }, 0)
    },
  
    clearCartItemsBurger(state, _) {
      state.items = [];
      state.totalPrice = 0;
    },
    addCartDecrement(state, action: PayloadAction<string>) {
      const findItemIncr = state.items.find(item => item.id === action.payload);
      
      if (findItemIncr!.count > 1) {
        findItemIncr!.count--;
      }
      state.totalPrice = state.items.reduce((accum, item) => {
        return accum + (item['price'] * item.count);
      }, 0)
    }
  }
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemsSelector = (id: string) => (state: RootState) => state.cart.items.find(el => el.id === id);

export const {addItemBurger, removeItemBurger, clearCartItemsBurger, addCartDecrement} = cartSlice.actions;

export default cartSlice.reducer;
