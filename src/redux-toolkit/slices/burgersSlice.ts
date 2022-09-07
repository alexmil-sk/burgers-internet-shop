import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {RootState} from "../store";
import {IBurgersSliceState, IBurgerSliceProps} from "../../@types/interfaces";
import {BurgerFetchInfo} from "../../@types/types";

export const fetchBurgers = createAsyncThunk<BurgerFetchInfo, IBurgerSliceProps>(
  'burgers/fetchBurgersStatus',
  async ({category, order, sortType, limitPage, currentPage}) => {
    
    const search = ''; //Переменная для передачи пустого параметра в строку запроса. Переменная оставлена для напоминания.
    //Создал локальный JS поиск по pizzaArray т.к. mpckapi.io не выполняет поиск по двум параметрам одновременно.
    
    const {data} = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`)
    
    return data;
  });



const initialState: IBurgersSliceState = {
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

export const burgersSelector = (state: RootState) => state.burgers;

//export const {setItemsBurgers} = burgersSlice.actions;

export default burgersSlice.reducer;
