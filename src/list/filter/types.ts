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