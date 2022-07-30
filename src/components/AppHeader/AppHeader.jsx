import React from 'react';
import './AppHeader.scss';
import pizzaMain from '../../assets/image/pizza-main.png';
import { BsCart4 } from "react-icons/bs";
import {Link} from "react-router-dom";



function AppHeader(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src={pizzaMain}  width="50" alt="pizza-main"/>
          </div>
          <span>iPIZZA</span>
        </div>
      </Link>
      <Link to="cart" >
        <div className="header__cart">
          <div className="header__cart-sum">
            <span>{500}&nbsp; &#8381;</span>
          </div>
          <div className="header__cart-icon">
            <BsCart4 />
            <span>3</span>
          </div>
        </div>
      </Link>
      
    </div>
  );
}

export default AppHeader;
