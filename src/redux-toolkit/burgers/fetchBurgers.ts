import {createAsyncThunk} from "@reduxjs/toolkit";
import {BurgerFetchInfo} from "../../@types/types";
import {IBurgerSliceProps} from "../../@types/interfaces";
import axios from "axios";

export const fetchBurgers = createAsyncThunk<BurgerFetchInfo[], IBurgerSliceProps>(
  'burgers/fetchBurgersStatus',
  async ({category, order, sortType, limitPage, currentPage}) => {
    
    const search = ''; //Переменная для передачи пустого параметра в строку запроса. Переменная оставлена для напоминания.
    //Создал локальный JS поиск по pizzaArray т.к. mpckapi.io не выполняет поиск по двум параметрам одновременно.
    
    const {data} = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`)
    
    return data;
  });
