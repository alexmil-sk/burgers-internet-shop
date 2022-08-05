import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios';
import AppCategories from "../../components/AppCategories/AppCategories.jsx";
import AppSort from "../../components/AppSort/AppSort.jsx";
//import SceletonLoaderPizzaBlock from "../../components/SceletonLoaderPizzaBlock/SceletonLoaderPizzaBlock.jsx";
import AppPizzaBlockBlur from "../../components/AppPizzaBlock/AppPizzaBlockBlur.jsx";
import AppPizzaBlock from "../../components/AppPizzaBlock/AppPizzaBlock.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import {ContextSearchField} from "../../App.jsx";
import AppSearch from "../../components/AppSearch/AppSearch.jsx";

function Home() {
  
  const {searchField} = useContext(ContextSearchField);
  const {categoryId, sortType, radioOrder, limitPage, currentPage} = useSelector(state => state.filter);
  
  const [pizzaArray, setPizzaArray] = useState([]);
  
  const category = categoryId ? ('category=' + categoryId) : '';
  const order = radioOrder === 'asc' ? 'asc' : 'desc';
  //const search = searchField ? ('search='+ searchField) : '';
  
  const search = ''; //Использовал JS поиск по pizzaArray т.к. mpckapi.io не выполняет поиск по двум параметрам
  
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
      axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/items?page=${currentPage}&limit=${limitPage}&${search}&${category}&sortBy=${sortType.sortProperty}&order=${order}`, {
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => setPizzaArray(res.data))
      
    }, [categoryId, sortType, radioOrder, searchField, currentPage, limitPage]
  )

//====================================================================
  
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
          !pizzaArray.length
            ? [...new Array(12)].map((_, idx) => <AppPizzaBlockBlur key={idx}/>)
            : pizzaArray
              .filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()))
              .map(item => (<AppPizzaBlock {...item} key={item.id}/>))
        }
        {/*Вариант со SCELETON ===========================*/}
        {/*{*/}
        {/*  !pizzaArray.length*/}
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
