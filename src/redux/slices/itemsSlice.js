import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (params, thunkApi) => {
    const { sortBy, order, category, currentPage } = params
    console.log('DEBUG fetch')
    const res = await axios.get(
      `https://651f2c9444a3a8aa47697fdb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`//&${search}
    )
    //  return (res.data)
    console.log(thunkApi.getState())
    if (res.data.length === 0) {
      return thunkApi.rejectWithValue('пришёл пустой массив items')
    } return thunkApi.fulfillWithValue(res.data) //всё нормально пришли данные

  }
)

const initialState = {
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
        console.log('идёт отправка запроса')
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        console.log('fetchItems.fulfilled ', action)
        state.items = action.payload
        state.status = "success"
        console.log('запрос выполнен')
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log('fetchItems.rejected ', action)
        state.status = "error"
        state.items = []
        console.log('ошибка запроса')
      })
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer