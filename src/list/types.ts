export type typeSearchItemParams = {
  sortBy: string, 
  order: string, 
  category: string, 
  currentPage: number,
  search: string,
}
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
