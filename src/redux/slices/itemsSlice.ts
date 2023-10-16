import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type typeItem = {
  id: string,
  title: string,
  price: number,
  image: string,
  sizes: number[],
  types: number[],
}

interface typeItemSliceState {
  items: typeItem[] ,
  status: 'loading' | 'success' | 'error'
}
// type typeFetchItemsArguments = Record<string, string>
type typeFetchItemsArguments = {
  sortBy: string,
  order: string,
  category: string,
  currentPage: string,
}

export const fetchItems = createAsyncThunk<typeItem[],  typeFetchItemsArguments >(
  'items/fetchItems',
  async (params) => {
    const { sortBy, order, category, currentPage } = params
    console.log('DEBUG fetch')
    const { data } = await axios.get<typeItem[]>(
      `https://651f2c9444a3a8aa47697fdb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`//&${search}
    )
     return data 
    // console.log(thunkApi.getState())
    // if (data.length === 0) {
    //   return thunkApi.rejectWithValue('пришёл пустой массив items')
    // } return thunkApi.fulfillWithValue(data) //всё нормально пришли данные

  }
)


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

export const selectItemData = (state: RootState) => state.items

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer