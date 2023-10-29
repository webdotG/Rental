import { typeCartItem } from "./types"

export const calcTotalPrice = (items: typeCartItem[]) => {
  return items.reduce((sum, obj) => {
    if (obj.deliveryType === 'доставка') return 1000 + obj.price * obj.count + sum
    return obj.price * obj.count + sum
  } , 0)
}
