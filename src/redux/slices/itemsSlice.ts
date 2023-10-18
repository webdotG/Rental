import { createSlice,} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchItems } from "../action/fetchItems";
import { typeItemSliceState, } from "../@types";

const initialState: typeItemSliceState = {
  items: [],
  status: 'loading',
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading"
        state.items = []
        console.log('THUNKAPI идёт отправка запроса')
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        console.log('fetchItems.fulfilled ', action)
        state.items = action.payload
        state.status = "success"
        console.log('THUNKAPI запрос выполнен')
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log('fetchItems.rejected ', action)
        state.status = "error"
        state.items = []
        console.log('THUNKAPI ошибка запроса')
      })
  },
})

export const selectItemData = (state: RootState) => state.items
export const { setItems } = itemsSlice.actions
export default itemsSlice.reducer