import { createSlice,} from "@reduxjs/toolkit";
import { typeItemSliceState } from "./types";
import { fetchItems } from './api';

import { mockData } from "./domain";

const initialState: typeItemSliceState = {
  items: [],
  filteredItems: [],
  status: 'loading',
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
    search(state, action) {
      if (action.payload) {
        const newItems = state.filteredItems.length ? state.filteredItems : state.items;

        console.log(action);

        state.filteredItems = newItems.filter((item) => {
          if (item.modelName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1) {
            return true;
          }
        });
      } else {
        state.filteredItems = [];
      }
    },
    filterItems(state, action) {
      const { categoryId } = action.payload;

      state.filteredItems = state.items.filter((item) => {
        console.log(item.categoryId);
        if (item.categoryId === categoryId) {
          return true;
        }
      });
    },
    sortItems(state, action) {
      const newItems = state.filteredItems.length ? state.filteredItems : state.items;
      const field = action.payload.sortPropery === 'title' ? 'modelName' : 'price';

      const sortedArray = newItems.sort((a, b) => {
        let nameA = a[field]; // Convert names to uppercase for case-insensitive sorting
        let nameB = b[field];
        if (field === 'modelName') {
          nameA = a[field]?.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          nameB = b[field]?.toUpperCase();
        }

        if (action.payload.name.endsWith('возрастанию')) {
          if (nameA < nameB) {
            return -1; // a should come before b
          } else if (nameA > nameB) {
            return 1; // a should come after b
          } else {
            return 0; // names are equal
          }
        } else {
          if (nameA > nameB) {
            return -1; // a should come before b
          } else if (nameA < nameB) {
            return 1; // a should come after b
          } else {
            return 0; // names are equal
          }
        }
      });

      state.filteredItems = sortedArray;
    }
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
        state.items = mockData.machines;
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

// export const selectItemData = (state: RootState) => state.items
export const { setItems, filterItems, search, sortItems } = itemsSlice.actions
export default itemsSlice.reducer
