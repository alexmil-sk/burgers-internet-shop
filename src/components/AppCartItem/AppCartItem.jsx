import React from 'react';
import classes from "./AppCartItem.module.scss";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {removeItemBurger, addItemBurger, addCartDecrement} from "../../redux-toolkit/slices/cartSlice.js";
import {useDispatch} from "react-redux";


function AppCartItem({item}) {
  
  const {id, name, imageUrl, price, type, size, count,} = item;
  const dispatch = useDispatch();
  
  function removeBurgerFromCart(id) {
    if(window.confirm('Are you sure you want to remove')) {
      dispatch(removeItemBurger(id));
    }
  }
  
  return (
    <>
      <div className={classes.cartItem}>
        <div className={classes.cartItemImg}>
          <img src={imageUrl} width="70" alt="pizza-main"/>
        </div>
        <div className={classes.cartItemTitle}>
          <p>{name}</p>
          <span>{type}&nbsp;тесто, {size}&nbsp;см</span>
        </div>
        <div className={classes.cartItemCount}>
            <AiOutlineMinusCircle
              className={count < 2 ? classes.MinusCircleDisabled : classes.MinusCircle}
              onClick={() => dispatch(addCartDecrement(id))}
            />
         
          <span>{count}</span>
          <AiOutlinePlusCircle
            className={classes.PlusCircle}
            onClick={() =>  dispatch(addItemBurger({id}))}
          />
        </div>
        <div className={classes.cartItemPrice}>
          <span>{price * count}&nbsp;&#8381;</span>
        </div>
        <div
          className={classes.cartItemDel}
          onClick={() => removeBurgerFromCart(id)}
            >
          <AiOutlineCloseCircle className={classes.Close}/>
        </div>
      </div>
      
    </>
  );
}

export default AppCartItem;
