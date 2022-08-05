import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortType: {name: 'популярности', sortProperty: 'rating'},
  radioOrder: 'asc',
  limitPage: '',
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
    }
  },
})

export const {setCategoryId, setSortType, setRadioOrder, setLimitPage, setCurrentPage} = filtersSlice.actions

export default filtersSlice.reducer
