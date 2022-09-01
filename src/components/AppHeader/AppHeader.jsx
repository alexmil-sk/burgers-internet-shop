import React from 'react';
import './AppHeader.scss';
import pizzaMain from '../../assets/image/pizza-main.png';
import {BsCart4} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {cartSelector} from "../../redux-toolkit/slices/cartSlice.js";


function AppHeader() {
  const {pathname} = useLocation();
  
  
  const {items, totalPrice} = useSelector(cartSelector);
  const totalCartCount = items.reduce((acc, item) => {
    return acc + item.count
  }, 0);
  
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src={pizzaMain} width="50" alt="pizza-main"/>
          </div>
          <span>iBurgeR</span>
        </div>
      </Link>
      
      {
        pathname === "/cart"
        ? null
  
        : (<Link to="cart" className="header__a">
            <div className="header__cart">
              <div className="header__cart-sum">
                <span>{totalPrice}&nbsp; &#8381;</span>
              </div>
              <div className="header__cart-icon">
                <BsCart4/>
                <span>{totalCartCount}</span>
              </div>
            </div>
          </Link>)
      }
    
    </div>
  );
}

export default AppHeader;
