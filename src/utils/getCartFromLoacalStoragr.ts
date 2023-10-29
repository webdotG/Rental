import { typeCartItem } from "../cart/types";
import { calcTotalPrice } from "../cart/domain"

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrice(items)

  return {
    items: items as typeCartItem[],
    totalPrice,
  }
}

