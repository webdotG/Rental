import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


type typeSort = {
  name: string,
  sortProperty:  'rating' | '-rating' | 'title' | '-title' | 'price' | '-price'
}

interface typeFilterSliceState {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sort: typeSort,
}

const initialState: typeFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: { name: 'популярности', sortProperty: 'rating' }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload 
    },

    setCategoryId(state, action: PayloadAction<number>) {
      // console.log('action setCategoryId :' + action)
      state.categoryId = action.payload
    },

    setSort(state, action: PayloadAction<typeSort>) {
      // console.log('action setSort :' + action)
      state.sort = action.payload
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      // console.log('action currentPage :' + action)
      state.currentPage = action.payload
    },

    setFilters(state, action: PayloadAction<typeFilterSliceState>) {
      // state.sort = action.payload.sort
      // state.categoryId = Number(action.payload.categoryId)
      // state.currentPage = Number(action.payload.currentPage)
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort
        state.categoryId = Number(action.payload.categoryId)
        state.currentPage = Number(action.payload.currentPage)
      } else {
        state.currentPage = 1
        state.categoryId = 0
        state.sort = { name: 'популярности', sortProperty: 'rating' }
      }
    }

  }
})

// export const selectFilter = (state:RootState) => state.filter
// export const selectSort = (state:RootState) => state.filter.sort

export const { setSearchValue, setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer