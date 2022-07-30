import React, {useEffect, useState} from 'react';
import AppCategories from "../../components/AppCategories/AppCategories.jsx";
import AppSort from "../../components/AppSort/AppSort.jsx";
//import SceletonLoaderPizzaBlock from "../../components/SceletonLoaderPizzaBlock/SceletonLoaderPizzaBlock.jsx";
import AppPizzaBlockBlur from "../../components/AppPizzaBlock/AppPizzaBlockBlur.jsx";
import AppPizzaBlock from "../../components/AppPizzaBlock/AppPizzaBlock.jsx";

function Home() {
  const arrSortTypes = ['популярности','цене','алфавиту'];
  
  const [pizzaArray, setPizzaArray] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(arrSortTypes[0]);
  const [toggleOpenPopup, setTogglesOpenPopup] = useState(false);
  
  
  useEffect(() => {
    setPizzaArray([]);
    fetch(`https://62e38bb63c89b95396ca9aec.mockapi.io/items?${categoryId ? ('category='+ categoryId) : ''}`)
      .then(r => r.json())
      .then(data => setPizzaArray(data))
  }, [categoryId, sortType])
  
  
  function onClickCategory(idx) {
    setCategoryId(idx);
  }
  
  function toggleSortHandle () {
    setTogglesOpenPopup(!toggleOpenPopup)
  }
  
  function getActiveSortType (type) {
    setSortType(type);
    setTogglesOpenPopup(false);
  }
  
  return (
    <>
      <div className="info-panel">
        <AppCategories
          categoryId={categoryId}
          onClickCategory={onClickCategory}
        />
        <AppSort
          sortType={sortType}
          arrSortTypes={arrSortTypes}
          toggleSortHandle={toggleSortHandle}
          toggleOpenPopup={toggleOpenPopup}
          getActiveSortType={getActiveSortType}
        />
      </div>
      <div className="pizza-list">
        
        {/*Вариант с РАЗМЫТИЕМ ===========================*/}
        {
          !pizzaArray.length
            ? [...new Array(12)].map((_, idx) => <AppPizzaBlockBlur key={idx}/>)
            : pizzaArray.map(item =>
              (<AppPizzaBlock
                  {...item}
                  key={item.id}
                />
              ))
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
    </>
  );
}

export default Home;
