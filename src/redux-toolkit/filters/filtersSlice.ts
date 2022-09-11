import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFilterSliceState} from "../../@types/interfaces";
import {RootState} from "../store";
import {SortType} from "../../@types/types";


const initialState: IFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  sortType: {name: 'popularity', sortProperty: 'rating'},
  radioOrder: 'asc',
  limitPage: '5',
  currentPage: 1,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setRadioOrder(state, action: PayloadAction<string>) {
      state.radioOrder = action.payload;
    },
    setLimitPage(state, action: PayloadAction<string>) {
      state.limitPage = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFilterSliceState>) => {
        state.currentPage = Number(action.payload.currentPage);
        state.sortType = action.payload.sortType;
        state.categoryId = Number(action.payload.categoryId);
        state.radioOrder = action.payload.radioOrder;
        state.limitPage = action.payload.limitPage;
    }
  },
})

export const {
  setCategoryId,
  setSearchValue,
  setSortType,
  setRadioOrder,
  setLimitPage,
  setCurrentPage,
  setFilters
} = filtersSlice.actions

export default filtersSlice.reducer;


export const filterSelector = (state: RootState) => state.filter;
