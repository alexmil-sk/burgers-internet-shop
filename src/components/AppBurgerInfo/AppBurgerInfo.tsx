import React, {useEffect, useState} from 'react';
import classes from './AppBurgerInfo.module.scss';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import AppBurgerInfoBlur from "./AppBurgerInfoBlur.jsx";
import {BurgerFetchInfo} from '../../@types/types';



const AppBurgerInfo: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [burgerInfo, setBurgerInfo] = useState<BurgerFetchInfo>({
    id: '',
    imageUrl: '',
    name: '',
    price: 0,
    rating: 0,
    sizes: [],
    types: [],
  });
  const {id, imageUrl, name, price, rating, sizes, types} = burgerInfo;
  const {burgerId} = useParams();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    setIsLoading(true);
    
    (async function fetchBurger() {
      try {
        const queryBurger = await axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/burger_shop/${burgerId}`)
        setBurgerInfo(queryBurger.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        navigate("/", {replace: true});
        confirm('There is no such burger.\n Try another one')
        console.log(error);
      }
    }())
  }, []);
  
  if (isLoading) {
    return <AppBurgerInfoBlur/>;
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
              <p>Lorem ipsum dolor sit amet, consecrate radicalising elite. Temporary, voluptuary.</p>
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
              <div className={classes.AppBurgerInfoContainerTextInfoRating}>Rating:&nbsp;<span>{rating}</span>
                <div className={classes.ratingArea}>
                  <input type="radio" id="star-5" name="rating" value="5"/>
                  <label htmlFor="star-5" title="Оценка «5»"></label>
                  <input type="radio" id="star-4" name="rating" value="4"/>
                  <label htmlFor="star-4" title="Оценка «4»"></label>
                  <input type="radio" id="star-3" name="rating" value="3"/>
                  <label htmlFor="star-3" title="Оценка «3»"></label>
                  <input type="radio" id="star-2" name="rating" value="2"/>
                  <label htmlFor="star-2" title="Оценка «2»"></label>
                  <input type="radio" id="star-1" name="rating" value="1"/>
                  <label htmlFor="star-1" title="Оценка «1»"></label>
                </div>
              </div>
            
            </div>
            
            <div className={classes.AppBurgerInfoContainerTextBottom}>
              <p><strong>Price:</strong><span>&nbsp;{price}&nbsp;&#8381;</span></p>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default AppBurgerInfo;
