import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from './Cart.module.scss';
import {BsCart4} from "react-icons/bs";
import {RiDeleteBin6Line} from "react-icons/ri";
import {ImList2} from "react-icons/im";
import AppCartItem from "../../components/AppCartItem/AppCartItem";
import {Link} from "react-router-dom";
import {cartSelector, clearCartItemsBurger} from "../../redux-toolkit/cart/cartSlice.js";
import AppEmptyCart from "../../components/AppEmptyCart/AppEmptyCart";
import {BurgerInfo} from "../../@types/types";


const Cart: React.FC = () => {
  
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector(cartSelector);
  const totalCartCount = items.reduce((acc: number, item: {count: number}) => {
    return acc + item.count
  }, 0);
  const isMounted = useRef(false);
  
  
  useEffect(() => {
    if(isMounted.current) {
      const ls = JSON.stringify(items);
      localStorage.setItem('cartItems', ls);
    }
    isMounted.current = true;
  }, [items]);
  
  function onClearCart() {
    if(window.confirm('Are you sure you want to clear order')) {
      dispatch(clearCartItemsBurger({payload: null}));
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
            items.map((item: BurgerInfo) => <AppCartItem item={item} key={item.id}/>)
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
