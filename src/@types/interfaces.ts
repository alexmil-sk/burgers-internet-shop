import {BurgerFetchInfo, BurgerInfo, SortType} from "./types";
import {BurgersSliceStatus} from "./enums";

export interface ICartSliceState {
  //items: BurgerBlock[],
  items: BurgerInfo[],
  totalPrice: number,
}

export interface IFilterSliceState {
  searchValue: string,
  categoryId: number,
  sortType: SortType,
  radioOrder: string,
  limitPage: string,
  currentPage: number,
}

export interface IBurgersSliceState {
  itemsBurgers: BurgerFetchInfo[],
  status: BurgersSliceStatus,
}


export interface IBurgerSliceProps {
  category: string,
  sortType: SortType,
  order: string,
  limitPage: string,
  currentPage: number,
}
