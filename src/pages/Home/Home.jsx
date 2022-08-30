import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';
import AppCategories from "../../components/AppCategories/AppCategories.jsx";
import AppSort from "../../components/AppSort/AppSort.jsx";
//import SceletonLoaderPizzaBlock from "../../components/SceletonLoaderPizzaBlock/SceletonLoaderPizzaBlock.jsx";
import AppPizzaBlockBlur from "../../components/AppPizzaBlock/AppPizzaBlockBlur.jsx";
import AppPizzaBlock from "../../components/AppPizzaBlock/AppPizzaBlock.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import {ContextSearchField} from "../../App.jsx";
import AppSearch from "../../components/AppSearch/AppSearch.jsx";
import qs from 'qs';
import {setFilters} from "../../redux-toolkit/slices/filtersSlice.js";
import {setItemsBurgers} from "../../redux-toolkit/slices/burgersSlice.js";

function Home() {
  
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  
  const isHaveSearchParams = useRef(false);
  
  const {searchField} = useContext(ContextSearchField);
  
  const {itemsBurgers} = useSelector(state => state.burgers)
  const {categoryId, sortType, radioOrder, limitPage, currentPage} = useSelector(state => state.filter);
  
  const [isLoading, setIsLoading] = useState(false);
  
  const category = categoryId ? ('category=' + categoryId) : '';
  const order = radioOrder === 'asc' ? 'asc' : 'desc';
  //const search = searchField ? ('search='+ searchField) : '';
  
  const search = ''; //Использовал JS поиск по pizzaArray т.к. mpckapi.io не выполняет поиск по двум параметрам
  
  
  useEffect(() => {
    if (location.search) {
      const locationParams = qs.parse(location.search.substring(1));
      
      dispatch(setFilters({...locationParams}));
      
      isHaveSearchParams.current = true;
    }
  }, [])
  
  useEffect(() => {
    const queryString = qs.stringify({
      sortBy: sortType.sortProperty,
      category: categoryId,
      page: currentPage,
      order: radioOrder,
      limit: limitPage
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
    }, [categoryId, sortType, radioOrder, searchField, currentPage, limitPage]
  )

//====================================================================
  
  async function axiosQuery() {
    setIsLoading(true);
    
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
    try {
      const {data} = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`, {
        headers: {
          'content-type': 'application/json'
        }
      })
      dispatch(setItemsBurgers(data))
    } catch (error) {
      console.log('ERROR: ', error.message);
    } finally {
      setIsLoading(false);
    }
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
          isLoading
            ? [...new Array(12)].map((_, idx) => <AppPizzaBlockBlur key={idx}/>)
            : itemsBurgers
              .filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()))
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
        limitPage
          ? <Pagination/>
          : null
      }
    </>
  );
}

export default Home;
