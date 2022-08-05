import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {name: 'популярности', sortProperty: 'rating'},
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    
  },
})

export const { setCategoryId } = filtersSlice.actions

export default filtersSlice.reducer
