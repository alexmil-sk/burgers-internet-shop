import React, {useEffect, useState} from 'react';
import classes from './AppBurgerInfo.module.scss';
import axios from 'axios';
import {useParams} from "react-router-dom";

function AppBurgerInfo() {
  
  const [burgerInfo, setBurgerInfo] = useState({});
  const {id, imageUrl, name, price, rating, sizes, types} = burgerInfo;
  const {burgerId} = useParams();
  
  
  useEffect(() => {
    (async function fetchBurger() {
      try {
        const queryBurger = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop/${burgerId}`)
        setBurgerInfo(queryBurger.data);
      } catch (error) {
        alert(error.message);
      }
      
    }())
  }, []);
  
  if (!burgerInfo) {
    return 'Загрузка...';
  }
  
  return (
    <>
      <div className={classes.AppBurgerInfo}>
        
        <div className={classes.AppBurgerInfoContainer}>
          <img src={imageUrl} alt={name}/>
          <div className={classes.AppBurgerInfoContainerText}>
            
            <div className={classes.AppBurgerInfoContainerTextInfo}>
              <h2>Card of Burger</h2>
              <h3>{name}</h3>
              <p><strong>ID:</strong>&nbsp;{id}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem.</p>
              <p>Types:&nbsp; {types}
                {
                  //types.map((i) => (
                  //  i === 0 ? <span key={i}>тонкое | </span> : <span key={i}>традиционное</span>
                  //))
                }
              </p>Sizes:&nbsp;{sizes}
              {
                //sizes.map((i) => (
                //  <span key={i}>{i}&nbsp;cm</span>
                //))
              }
              <p>Rating: <span>{rating}</span></p>
            </div>
            
            <div className={classes.AppBurgerInfoContainerTextBottom}>
              <p><strong>Price:</strong><span>&nbsp;{price}&nbsp;&#8381;</span></p>
              <button>order</button>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default AppBurgerInfo;
