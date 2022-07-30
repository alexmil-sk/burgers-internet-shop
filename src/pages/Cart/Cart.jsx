import React from 'react';
import classes from './Cart.module.scss';
import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImList2 } from "react-icons/im";
import AppCartItem from "../../components/AppCartItem/AppCartItem.jsx";
import {Link} from "react-router-dom";


function Cart(props) {
  return (
    <div className={classes.cart}>
      <div className={classes.cartTitle}>
        <h1><BsCart4 className={classes.BsCart4}/>Корзина</h1>
        <span><RiDeleteBin6Line />Очистить корзину</span>
      </div>
      <div className={classes.cartContent}>
        <AppCartItem />
      </div>
      <div className={classes.cartBottom}>
        <div className={classes.cartBottomDetails}>
          <span>{''} Всего заказано: <strong>3</strong>&nbsp;шт.</span>
          <span>{''} Сумма заказа: <strong>900</strong>&nbsp;&#8381;</span>
        </div>
        <div className={classes.cartBottomBtn}>
          <Link to="/" className={classes.cartBottomBtnList}>
            <ImList2 />
            <span>Вернуться к списку</span>
          </Link>
          <div className={classes.cartBottomBtnPay}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Cart;
