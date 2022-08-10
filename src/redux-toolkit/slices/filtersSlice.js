import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortType: {name: 'популярности', sortProperty: 'rating'},
  radioOrder: 'asc',
  limitPage: 5,
  currentPage: 1,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setRadioOrder(state, action) {
      state.radioOrder = (action.payload);
    },
    setLimitPage(state, action) {
      state.limitPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.page);
      state.sortType.sortProperty = action.payload.sortBy;
      state.categoryId = Number(action.payload.category);
      state.radioOrder = action.payload.order;
      state.limitPage = action.payload.limit;
    }
  },
})


export const {setCategoryId, setSortType, setRadioOrder, setLimitPage, setCurrentPage, setFilters} = filtersSlice.actions

export default filtersSlice.reducer
