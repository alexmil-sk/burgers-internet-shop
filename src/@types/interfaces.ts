import {BurgerFetchInfo, BurgerInfo, SortType} from "./types";
import {BurgersSliceStatusEnum} from "./enums";

export interface ICartSliceState {
  items:  BurgerInfo[],
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
  status: BurgersSliceStatusEnum,
}


export interface IBurgerSliceProps {
  category: string,
  sortType: SortType,
  order: string,
  limitPage: string,
  currentPage: number,
}

export interface IAppSortProps  {
  sortType: SortType,
  radioOrder: string,
  limitPage: string
}
