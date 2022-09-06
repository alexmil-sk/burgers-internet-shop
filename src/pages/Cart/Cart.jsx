import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from './Cart.module.scss';
import {BsCart4} from "react-icons/bs";
import {RiDeleteBin6Line} from "react-icons/ri";
import {ImList2} from "react-icons/im";
import AppCartItem from "../../components/AppCartItem/AppCartItem.tsx";
import {Link} from "react-router-dom";
import {cartSelector, clearCartItemsBurger} from "../../redux-toolkit/slices/cartSlice.js";
import AppEmptyCart from "../../components/AppEmptyCart/AppEmptyCart.tsx";


function Cart() {
  
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector(cartSelector);
  const totalCartCount = items.reduce((acc, item) => {
    return acc + item.count
  }, 0);
  
  function onClearCart() {
    if(window.confirm('Are you sure you want to clear order')) {
      dispatch(clearCartItemsBurger());
    }
  }
  
  if(!items.length)  {
    return <AppEmptyCart />
  }
  
  return (
    <div className={classes.cart}>
      <div className={classes.cartTitle}>
        <h1><BsCart4 className={classes.BsCart4}/>Cart</h1>
        <div
          className={classes.cartClearBtn}
          onClick={onClearCart}
        ><RiDeleteBin6Line/>To clear the cart</div>
      </div>
      <div className={classes.cartContent}>
        
        {
            items.map(item => <AppCartItem item={item} key={item.id}/>)
        }
      
      </div>
      <div className={classes.cartBottom}>
        <div className={classes.cartBottomDetails}>
          <span>Total in order: <strong>{totalCartCount}&nbsp;pcs.</strong></span>
          <span>Order amount: <strong>{totalPrice}&nbsp;&#8381;</strong></span>
        </div>
        <div className={classes.cartBottomBtn}>
          <Link to="/" className={classes.cartBottomBtnList}>
            <ImList2/>
            <span>Back to selection</span>
          </Link>
          <div className={classes.cartBottomBtnPay}>
            <span>Pay now</span>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Cart;
