import {BurgerFetchInfo, BurgerInfo, SortType} from "./types";

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
  status: 'loading' | 'success' | 'error',
}

export interface IBurgerSliceProps {
  searchValue: string,
  category: string,
  sortType: SortType,
  order: string,
  limitPage: string,
  currentPage: number,
}
