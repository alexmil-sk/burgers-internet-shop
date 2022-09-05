import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import waitingForOrder from '../../assets/image/waiting-for-order.jpg';
import btnList from '../../assets/image/btn/btn-list.png';
import btnBurger from '../../assets/image/btn/btn-burger.png';
import classes from "./AppEmptyCart.module.scss";


function AppEmptyCart(): React.ReactComponentElement<T> {
  
  const [isPressedBtn, setIsPressedBtn] = useState(false);
  
  function mouseEnterLeave() {
    setIsPressedBtn(!isPressedBtn)
  }
  
  
  return (
    <>
      <div className={classes.AppEmptyCart}>
        <div className={classes.AppEmptyCartTitle}>
          <h2>We are waiting for your order...</h2>
        </div>
        <img src={waitingForOrder} alt="waiting-for-order"/>
        <div className={classes.AppEmptyCartBtn}>
          <Link to="/">
            <img className={classes.AppEmptyCartBtnImg}
              onMouseLeave={mouseEnterLeave}
              onMouseEnter={mouseEnterLeave}
              onClick={() => setIsPressedBtn(true)}
              src={isPressedBtn ? btnBurger : btnList}
              alt={isPressedBtn ? "btn-burger" : "btn-list"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default AppEmptyCart;
