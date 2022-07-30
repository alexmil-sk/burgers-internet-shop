import React, {useEffect, useState} from 'react';
import AppCategories from "../../components/AppCategories/AppCategories.jsx";
import AppSort from "../../components/AppSort/AppSort.jsx";
//import SceletonLoaderPizzaBlock from "../../components/SceletonLoaderPizzaBlock/SceletonLoaderPizzaBlock.jsx";
import AppPizzaBlockBlur from "../../components/AppPizzaBlock/AppPizzaBlockBlur.jsx";
import AppPizzaBlock from "../../components/AppPizzaBlock/AppPizzaBlock.jsx";

function Home() {
  
  const [pizzaArray, setPizzaArray] = useState([]);
  
  //useEffect(() => {
  //  fetch("https://62e38bb63c89b95396ca9aec.mockapi.io/items")
  //    .then(r => r.json())
  //    .then(data => setPizzaArray(data))
  //}, [])
  
  //https://62e38bb63c89b95396ca9aec.mockapi.io/items?sortBy=id&order=desc&search=Пепперони
  
  return (
    <>
      <div className="info-panel">
        <AppCategories/>
        <AppSort/>
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
