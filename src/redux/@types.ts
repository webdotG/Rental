///////////////////////////////////ITEMS
export type typeItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  sizes: number[],
  types: number[],
}
export interface typeItemSliceState {
  items: typeItem[] ,
  status: 'loading' | 'success' | 'error'
}
export type typeFetchItemsArguments = {
  sortBy: typeSort,
  order: string,
  category: string,
  currentPage: string,
}

export type typeSearchItemParams = {
  sortBy: string, 
  order: string, 
  category: string, 
  currentPage: number,
  search: string,
}
//////////////////////////////////CART
export type typeCartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  type: string,
  size: number,
  count: number,
}

export interface typeCartSlice {
  totalPrice: number,
  items: typeCartItem[],
}
//////////////////////////////////////////////FILTER
export type typeSort = {
  name: string,
  sortProperty:  'rating' | '-rating' | 'title' | '-title' | 'price' | '-price'
}


export interface typeFilterSliceState {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sort: typeSort,
}

