import React from 'react';
import waitingForOrder from '../../assets/image/waiting-for-order.jpg';
import classes from "./AppEmptyCart.module.scss";


function AppEmptyCart() {
  return (
    <>
      <div className={classes.AppEmptyCart}>
        <div className={classes.AppEmptyCartTitle}>
          <h2>We are waiting for your order...</h2>
        </div>
        <img src={waitingForOrder} alt="waiting-for-order"/>
      </div>
    </>
  );
}

export default AppEmptyCart;
