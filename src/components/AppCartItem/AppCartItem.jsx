import React from 'react';
import classes from "./AppCartItem.module.scss";
import pizzaMain from '../../assets/image/pizza-main.png'
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

function AppCartItem(props) {
  return (
    <>
      <div className={classes.cartItem}>
        <div className={classes.cartItemImg}>
          <img src={pizzaMain} width="50" alt="pizza-main"/>
        </div>
        <div className={classes.cartItemTitle}>
          <p>Кисло-сладский цыпленок</p>
          <span>тонкое тесто, 26 см</span>
        </div>
        <div className={classes.cartItemCount}>
          <AiOutlineMinusCircle className={classes.MinusCircle}/>
          <span>2</span>
          <AiOutlinePlusCircle className={classes.PlusCircle}/>
        </div>
        <div className={classes.cartItemPrice}>
          <span>1250&nbsp;&#8381;</span>
        </div>
        <div className={classes.cartItemDel}>
          <AiOutlineCloseCircle className={classes.Close}/>
        </div>
      </div>
      
    </>
  );
}

export default AppCartItem;
