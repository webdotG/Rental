export type typeSearchItemParams = {
  sortBy: string, 
  order: string, 
  category: string, 
  currentPage: number,
  search: string,
}
export type typeItem = {
  id: number,
  title?: string,
  modelName: string,
  categoryId: number,
  fields: {name: string, value: string}[],
  price: number,
  imageUrl: string,
  sizes?: number[],
  types?: number[],
}
export interface typeItemSliceState {
  items: typeItem[] ,
  filteredItems: typeItem[],
  status: 'loading' | 'success' | 'error'
}
