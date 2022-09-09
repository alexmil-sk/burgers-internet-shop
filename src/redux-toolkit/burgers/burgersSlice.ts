import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {IBurgersSliceState} from "../../@types/interfaces";
import {BurgersSliceStatusEnum} from "../../@types/enums";
import {fetchBurgers} from "./fetchBurgers";




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

//export const {setItemsBurgers} = burgersSlice.actions;

export default burgersSlice.reducer;

export const burgersSelector = (state: RootState) => state.burgers;
