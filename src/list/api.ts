import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeItem, typeSearchItemParams } from "./types";
import { mockData } from "./domain";

const delay = (): Promise<typeItem[]> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData.machines);
  }, 700);
})

export const fetchItems = createAsyncThunk<typeItem[], typeSearchItemParams >(
  'items/fetchItems',
    async (_, thunkApi) => {
    // const { sortBy, order, category, currentPage, search } = params
    const data = await delay();
    // const { data } = await axios.get<typeItem[]>(
    //   `https://651f2c9444a3a8aa47697fdb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`//&${search}
    // )
    //  return data 
    // console.log(thunkApi.getState())
    if (data.length === 0) {
      return thunkApi.rejectWithValue('пришёл пустой массив items')
    } return thunkApi.fulfillWithValue(data) //всё нормально пришли данные
  }
);

