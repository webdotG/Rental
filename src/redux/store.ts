import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import items from './slices/itemsSlice'
// import auth from './slices/authSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    items,
    // auth,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch