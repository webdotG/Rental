import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { getCartFromLS } from '../../utils/getCartFromLoacalStoragr'
import { calcTotalPrice } from './domain';
import { RootState } from '../shared-kernel/store';
import { typeCartItem, typeCartSlice } from './types'

// const {items, totalPrice} = getCartFromLS() 

const initialState: typeCartSlice = {
  items: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<typeCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },
    deleteItem(state, action: PayloadAction<typeCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem && findItem.count > 0) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem && findItem.count > 0) {
        findItem.count = findItem.count - 1;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },
    removeItem(state, action: PayloadAction<number>) {
      const newItems = state.items.filter((obj) => obj.id !== action.payload);
      state.items = newItems;
      state.totalPrice = newItems.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    }
  }
})

export const selectCart = (state: RootState) => state.cart
export const { addItem, removeItem, minusItem, clearItems, deleteItem } = cartSlice.actions

export default cartSlice.reducer
