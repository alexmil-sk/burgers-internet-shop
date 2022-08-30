import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  
  reducers: {
    addItemBurger(state, action) {
      
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
    removeItemBurger(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      state.totalPrice = state.items.reduce((accum, item) => {
        return accum + (item['price'] * item.count);
      }, 0)
    },
  
    clearCartItemsBurger(state, _) {
      state.items = [];
      state.totalPrice = 0;
    },
    addCartDecrement(state, action) {
      const findItemIncr = state.items.find(item => item.id === action.payload);
      if (findItemIncr.count > 1) {
        findItemIncr.count--;
      }
    }
  }
});

export const {addItemBurger, removeItemBurger, clearCartItemsBurger, addCartDecrement} = cartSlice.actions;

export default cartSlice.reducer;
