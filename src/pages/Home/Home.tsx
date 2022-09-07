import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";
import AppCategories from "../../components/AppCategories/AppCategories";
import AppSort from "../../components/AppSort/AppSort";
import AppPizzaBlockBlur from "../../components/AppPizzaBlock/AppPizzaBlockBlur.js";
import AppPizzaBlock from "../../components/AppPizzaBlock/AppPizzaBlock";
import Pagination from "../../components/Pagination/Pagination";
import AppSearch from "../../components/AppSearch/AppSearch";
import qs from 'qs';
import {filterSelector, setFilters} from "../../redux-toolkit/slices/filtersSlice.js";
import {burgersSelector, fetchBurgers} from "../../redux-toolkit/slices/burgersSlice.js";
import AppNoData from "../../components/AppNoData/AppNoData";
//import SceletonLoaderPizzaBlock from "../../components/SceletonLoaderPizzaBlock/SceletonLoaderPizzaBlock.tsx";


const Home: React.FC = () => {
  
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  
  const isHaveSearchParams = useRef(false);
  
  const {itemsBurgers, status} = useSelector(burgersSelector);
  
  const {categoryId, searchValue, sortType, radioOrder, limitPage, currentPage} = useSelector(filterSelector);
  
  
  const category = categoryId ? ('category=' + categoryId) : '';
  const order = radioOrder === 'asc' ? 'asc' : 'desc';
  
  
  useEffect(() => {
    if (location.search) {
      const locationParams = qs.parse(location.search.substring(1));
      
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
      // @ts-ignore
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
        <AppSort/>
      </div>
      <div className="pizza-list">
        
        {/*Вариант с РАЗМЫТИЕМ ===========================*/}
        {
          status === 'error'
            ? (<AppNoData/>)
            : status === 'loading'
              ? [...new Array(12)].map((_, idx) => <AppPizzaBlockBlur key={idx}/>)
              : itemsBurgers
                .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(item => (<AppPizzaBlock {...item} key={item.id}/>))
        }
        
        {/*Вариант со SCELETON ===========================*/}
        {/*{*/}
        {/*  isLoading*/}
        {/*    ? [...new Array(6)].map((_, idx) => <SceletonLoaderPizzaBlock key={idx}/>)*/}
        {/*    : pizzaArray.map(item =>*/}
        {/*      (<AppPizzaBlock*/}
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
