import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";

import {AppBurgerBlockBlur, AppBurgerBlock, AppCategories, Pagination, AppSearch, AppSort, AppNoData} from '../../components';
//import {SceletonLoaderBurgerBlock} from '../../components';

import qs from 'qs';
import {filterSelector, setFilters} from "../../redux-toolkit/filters/filtersSlice";
import {burgersSelector} from "../../redux-toolkit/burgers/burgersSlice";
import {IFilterSliceState} from "../../@types/interfaces";
import {useAppDispatch} from "../../redux-toolkit/store";
import {fetchBurgers} from "../../redux-toolkit/burgers/fetchBurgers";


const Home: React.FC = () => {
  
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useAppDispatch();
  
  const isHaveSearchParams = useRef(false);
  
  const {itemsBurgers, status} = useSelector(burgersSelector);
  
  const {categoryId, searchValue, sortType, radioOrder, limitPage, currentPage}: IFilterSliceState = useSelector(filterSelector);
  
  
  const category = categoryId ? ('category=' + categoryId) : '';
  const order = radioOrder === 'asc' ? 'asc' : 'desc';
  
  
  useEffect(() => {
    if (location.search) {
      const locationParams: IFilterSliceState = qs.parse(location.search.substring(1));
      
      dispatch(setFilters({...locationParams}));
      
      isHaveSearchParams.current = true;
    }
  }, [])
  
  useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      currentPage,
      radioOrder,
      limitPage
    });
    navigate(`?${queryString}`)
    
  }, [categoryId, sortType, radioOrder, currentPage, limitPage])
  
  //========== FETCH MOCK-API.IO===============================================
  //useEffect(() => {
  //  setPizzaArray([]);
  //  fetch(`https://62e38bb63c89b95396ca9aec.mockapi.io/items?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`)
  //    .then(r => r.json())
  //    .then(data => setPizzaArray(data))
  //}, [categoryId, sortType, radioOrder, searchField, currentPage, limitPage])
  
  //====================================================================
  
  //========== AXIOS MOCK-API.IO===============================================
  useEffect(() => {
      if (!isHaveSearchParams.current) {
        axiosQuery().then(r => r);
      }
      isHaveSearchParams.current = false;
    }, [categoryId, sortType, radioOrder, searchValue, currentPage, limitPage]
  )

//====================================================================
  
  async function axiosQuery() {
    
    //СИНХРОННЫЙ ЗАПРОС =====================================================
    
    // axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`, {
    //     headers: {
    //       'content-type': 'application/json'
    //     }
    //   })
    //   .then(res => {
    //     setPizzaArray(res.data);
    //     setIsLoading(false)
    //   })
    //   .catch(error => {
    //     console.log('ERROR: ', error);
    //     setIsLoading(false)
    //   })
    
    //AСИНХРОННЫЙ ЗАПРОС =====================================================
    
    dispatch(
      fetchBurgers({
      category,
      order,
      sortType,
      limitPage,
      currentPage,
    }))
  }
  
  return (
    <>
      <AppSearch/>
      <div className="info-panel">
        <AppCategories/>
        <AppSort
          sortType={sortType}
          radioOrder={radioOrder}
          limitPage={limitPage}
        />
      </div>
      <div className="burger-list">
        
        {/*Вариант с РАЗМЫТИЕМ ===========================*/}
        {
          status === 'error'
            ? (<AppNoData/>)
            : status === 'loading'
              ? [...new Array(12)].map((_, idx) => <AppBurgerBlockBlur key={idx}/>)
              : itemsBurgers
                .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(item => (<AppBurgerBlock {...item} key={item.id}/>))
        }
        
        {/*Вариант со SCELETON ===========================*/}
        {/*{*/}
        {/*  isLoading*/}
        {/*    ? [...new Array(6)].map((_, idx) => <SceletonLoaderBurgerBlock key={idx}/>)*/}
        {/*    : pizzaArray.map(item =>*/}
        {/*      (<AppBurgerBlock*/}
        {/*          */}
        {/*          {...item}*/}
        {/*          key={item.id}*/}
        {/*        />*/}
        {/*      ))*/}
        {/*  */}
        {/*}*/}
      </div>
      {
        status === 'error'
          ? null
          : limitPage ? <Pagination/> : null
      }
    </>
  );
}

export default Home;
