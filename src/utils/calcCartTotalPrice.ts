import {BurgerInfo} from "../@types/types";

export const calcCartTotalPrice = (items: BurgerInfo[]) => {
  return items.reduce((accum, item) => {
    return accum + (item['price'] * item.count);
  }, 0)
}
