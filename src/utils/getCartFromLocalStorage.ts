import {calcCartTotalPrice} from "./calcCartTotalPrice";
import {BurgerInfo} from "../@types/types";

export const getCartFromLocalStorage = () => {
  const ls = localStorage.getItem('cartItems');
  const items = ls ? JSON.parse(ls) : [];
  const totalPrice = calcCartTotalPrice(items)
  
    return {
      items: items as BurgerInfo [],
      totalPrice
    }
}
