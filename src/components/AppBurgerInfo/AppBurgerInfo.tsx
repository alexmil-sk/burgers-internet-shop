import React, {useEffect, useState} from 'react';
import classes from './AppBurgerInfo.module.scss';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import {BurgerFetchInfo} from '../../@types/types';

import {AppBurgerInfoBlur} from '../../components';


export const AppBurgerInfo: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [burgerInfo, setBurgerInfo] = useState<BurgerFetchInfo>({
    id: '',
    imageUrl: '',
    name: '',
    desc: '',
    weight: '',
    price: 0,
    rating: 0,
    sizes: [],
    types: [],
  });
  const {id, imageUrl, name, desc, weight, price, rating, sizes, types} = burgerInfo;
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
              <h2>{name}</h2>
              <p><strong>ID:</strong>&nbsp;{id}</p>
              <p><strong>Description:</strong>&nbsp;{desc}</p>
              <p><strong>Weight:</strong>&nbsp;{weight}</p>
              <p><strong>Types:</strong>&nbsp;
                {
                  types.map((i) => (
                    i === 0 ? <span key={i}>crispy bun</span> : <span key={i}>&nbsp;|&nbsp;regular bun</span>
                  ))
                }
              </p>
              <p><strong>Sizes:</strong>&nbsp;
                {
                  sizes.map((i) => (
                    <span key={i}>{i}&nbsp;cm&nbsp;|&nbsp;</span>
                  ))
                }
              </p>
            </div>
            <div className={classes.AppBurgerInfoContainerTextInfoRating}>
              <p><strong>Current rating:</strong>&nbsp;<span>{rating}</span></p>
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
            <div className={classes.AppBurgerInfoContainerTextBottom}>
              <p><strong>Price:</strong><span style={{color: 'red'}}><strong>&nbsp;&#8364;&nbsp;{(price / 70).toFixed(2)}</strong></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}
