import {calcCartTotalPrice} from "./calcCartTotalPrice";

export const getCartFromLocalStorage = () => {
  const ls = localStorage.getItem('cartItems');
  const items = ls ? JSON.parse(ls) : [];
  const totalPrice = calcCartTotalPrice(items)
  
    return {
      items,
      totalPrice
    }
}
