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

export type BurgerBlockAdd = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
  size?: number;
  type?: string;
}

export type ArrSortType = {
  name: string,
  sortProperty: 'price' | 'rating' | 'name',
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
  count?: number;
}

export type BurgerFetchInfo = {
  id: string;
  imageUrl: string;
  name: string;
  desc: string;
  weight: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
}


export type AppBurgerBlockProps = BurgerBlock;

export type PaginationPageChange = {
  selected: number
}

export type SortType = {
  name: string,
  sortProperty: 'price' | 'rating' | 'name',
}
