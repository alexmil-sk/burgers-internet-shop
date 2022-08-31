import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchBurgers = createAsyncThunk(
  'burgers/fetchBurgersStatus',
  async ({category, order, sortType, limitPage, currentPage, search}) => {
    
    const {data} = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`)
    
    return data;
  });


const initialState = {
  itemsBurgers: [],
  status: 'loading',//loading,| success | error
}

const burgersSlice = createSlice({
  name: 'burgers',
  initialState,
  reducers: {
    //setItemsBurgers(state, action) {
    //  state.itemsBurgers = action.payload
    //},
  },
  extraReducers: {
    [fetchBurgers.pending]: (state) => {
    //['burgers/fetchBurgersStatus/pending']: (state) => {
      state.status = 'loading';
      state.itemsBurgers = [];
  
    },
    //[fetchBurgers.fulfilled]: (state, action) => {
    ['burgers/fetchBurgersStatus/fulfilled']: (state, action) => {
      state.status = 'success';
      state.itemsBurgers = action.payload;
    },
    [fetchBurgers.rejected]: (state) => {
    //['burgers/fetchBurgersStatus/rejected']: (state) => {
      state.status = 'error';
      state.itemsBurgers = [];
    },
    
  },
});

export const burgersSelector = state => state.burgers;

export const {setItemsBurgers} = burgersSlice.actions;

export default burgersSlice.reducer;
