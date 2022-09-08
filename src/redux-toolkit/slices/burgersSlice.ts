import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {RootState} from "../store";
import {IBurgersSliceState, IBurgerSliceProps} from "../../@types/interfaces";
import {BurgerFetchInfo} from "../../@types/types";
import {BurgersSliceStatusEnum} from "../../@types/enums";

export const fetchBurgers = createAsyncThunk<BurgerFetchInfo[], IBurgerSliceProps>(
  'burgers/fetchBurgersStatus',
  async ({category, order, sortType, limitPage, currentPage}) => {
    
    const search = ''; //Переменная для передачи пустого параметра в строку запроса. Переменная оставлена для напоминания.
    //Создал локальный JS поиск по pizzaArray т.к. mpckapi.io не выполняет поиск по двум параметрам одновременно.
    
    const {data} = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`)
    
    return data;
  });


const initialState: IBurgersSliceState = {
  itemsBurgers: [],
  status: BurgersSliceStatusEnum.LOADING,//loading,| success | error
}

const burgersSlice = createSlice({
  name: 'burgers',
  initialState,
  reducers: {
    //setItemsBurgers(state, action) {
    //  state.itemsBurgers = action.payload
    //},
  },
  
  
  //ВАРИАНТ-1 ДЛЯ ТИПИЗАЦИИ В TYPESCRIPT ================================
  
  extraReducers: (builder) => {
    
    builder.addCase(fetchBurgers.pending, (state, _) => {
      state.status = BurgersSliceStatusEnum.LOADING;
      state.itemsBurgers = [];
    });
  
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
          state.status = BurgersSliceStatusEnum.SUCCESS;
          state.itemsBurgers = action.payload;
    });
  
    builder.addCase(fetchBurgers.rejected, (state, _ ) => {
           state.status = BurgersSliceStatusEnum.ERROR;
           state.itemsBurgers = [];
    });
  },
  
  
  //ВАРИАНТ-2 ДЛЯ ИСПОЛЬЗОВАНИЯ БЕЗ TYPESCRIPT ================================
  // extraReducers: {
  //   [fetchBurgers.pending]: (state) => {
  //   //['burgers/fetchBurgersStatus/pending']: (state) => {
  //     state.status = 'loading';
  //     state.itemsBurgers = [];
  //
  //   },
  //   //[fetchBurgers.fulfilled]: (state, action) => {
  //   ['burgers/fetchBurgersStatus/fulfilled']: (state, action) => {
  //     state.status = 'success';
  //     state.itemsBurgers = action.payload;
  //   },
  //   [fetchBurgers.rejected]: (state) => {
  //   //['burgers/fetchBurgersStatus/rejected']: (state) => {
  //     state.status = 'error';
  //     state.itemsBurgers = [];
  //   },
  //
  // },
});

export const burgersSelector = (state: RootState) => state.burgers;

//export const {setItemsBurgers} = burgersSlice.actions;

export default burgersSlice.reducer;
