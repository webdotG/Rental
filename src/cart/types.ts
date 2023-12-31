export type typeCartItem = {
  id: any ,
  deliveryType: 'самовывоз' | 'доставка',
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
