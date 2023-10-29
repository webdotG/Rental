export type typeCartItem = {
  id: number,
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
