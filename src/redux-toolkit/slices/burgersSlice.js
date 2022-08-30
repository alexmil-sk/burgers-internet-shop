import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  itemsBurgers: [],
}

const burgersSlice = createSlice({
  name: 'burgers',
  initialState,
  reducers: {
    setItemsBurgers(state, action) {
      state.itemsBurgers = action.payload
    }
  }
});

export const {setItemsBurgers} = burgersSlice.actions;

export default burgersSlice.reducer;
