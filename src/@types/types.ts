
export type BurgerInfo = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
  count: number;
  size?: number;
  type?: string;
}

export type ArrSortType = {
  name: string;
  sortProperty: string;
}

export type Category = string;

export type AppCartItemProps = {
  item: BurgerInfo,
}

export type BurgerBlock = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
  count: number;
}


export type AppPizzaBlockProps = BurgerBlock;

export type PaginationPageChange = {
  selected: number
}
