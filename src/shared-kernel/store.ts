import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cart from '../cart/state';
import items from '../list/state'
import filter from '../list/filter/state';
import auth from '../auth/state';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    items,
    auth,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
