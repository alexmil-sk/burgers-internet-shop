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
      const findItem = state.items.find(item => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({...action.payload, count: 1});
      }
      
      state.totalPrice = state.items.reduce((accum, item) => {
        return accum + (item.price * item.count);
      }, 0)
    },
    removeItemBurger(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    clearItemsBurger(state, _) {
      state.items = [];
    },
    addCartDecrement(state, action) {
      const findItemIncr = state.items.find(item => item.id === action.payload);
      if (findItemIncr.count > 1) {
        findItemIncr.count--;
      }
    }
  }
});

export const {addItemBurger, removeItemBurger, clearItemsBurger, addCartDecrement} = cartSlice.actions;

export default cartSlice.reducer;
