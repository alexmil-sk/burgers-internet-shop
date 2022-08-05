import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortType: {name: 'популярности', sortProperty: 'rating'},
  radioOrder: 'asc',
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
    }
  },
})

export const { setCategoryId, setSortType } = filtersSlice.actions

export default filtersSlice.reducer
