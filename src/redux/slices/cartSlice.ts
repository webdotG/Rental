import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getCartFromLS } from '../../utils/getCartFromLoacalStoragr'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { typeCartItem, typeCartSlice } from '../@types'

const {items, totalPrice} = getCartFromLS() 
const initialState: typeCartSlice = {
  items,
  totalPrice
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem (state, action) {
    //   state.items.push(action.payload) 
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum
    //   }, 0)
    // },
    //   addItem (state, action) {
    //   state.items.push(action.payload); 
    //   state.totalPrice += action.payload.price;
    //  } , 
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
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem && findItem.count > 0) {
        findItem.count--
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    }

  }
})

export const selectCart = (state: RootState) => state.cart
// export const selectCartItemById = (id: string) => (state:RootState) =>
//   state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, minusItem, clearItems, deleteItem } = cartSlice.actions

export default cartSlice.reducer

//   addItem(state, {payload}) {
//     const findItem = state.items.find(obj => {
//       return ((obj.id === payload.id) &&
//         (obj.size === payload.size) &&
//         (obj.type === payload.type))
//     });
//     findItem ? findItem.count++ : state.items.push({
//       ...payload, count: 1
//     });
//     state.totalPrice = state.items.reduce((sum, obj) => {
//       return obj.price * obj.count + sum;
//     }, 0);
//   },
//   minusItem(state, {payload}) {
//     const findItem = state.items.find(obj => {
//       return ((obj.id === payload.id) &&
//         (obj.size === payload.size) &&
//         (obj.type === payload.type))
//     });
//     findItem && findItem.count--;
//     state.totalPrice -= findItem.price;
//   },
//   removeItem(state, {payload}) {
//     const findItem = state.items.find(obj => {
//       return ((obj.id === payload.id) &&
//         (obj.size === payload.size) &&
//         (obj.type === payload.type))
//     });
//     state.totalPrice -= findItem.price * findItem.count;
//     state.items = state.items.filter(obj => {
//       return ((obj.id !== payload.id) ||
//         (obj.size !== payload.size) ||
//         (obj.type !== payload.type))
//     });
//   }
