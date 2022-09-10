import React, {useState} from 'react';
import './AppBurgerBlock.scss';
import {useDispatch, useSelector} from "react-redux";
import {addItemBurger, cartItemsSelector} from "../../redux-toolkit/cart/cartSlice.js";
import {Link} from "react-router-dom";
import {AppBurgerBlockProps, BurgerBlockAdd} from "../../@types/types";

const burgerTypesArray: string[] = ['тонкое', 'традиционное'];


export const AppBurgerBlock: React.FC<AppBurgerBlockProps> = ({...item}: AppBurgerBlockProps) => {
  const {id, name, price, imageUrl, sizes, types, rating} = item;
  
  const dispatch = useDispatch();
  const totalBurgersInCart = useSelector(cartItemsSelector(id));
  
  const count = totalBurgersInCart ? totalBurgersInCart.count : null;
  
  const [activeSize, setActiveSize] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(0);
  
  function onClickAdd() {
    const newItem: BurgerBlockAdd = {
      ...item,
      type: burgerTypesArray[activeType],
      size: sizes[activeSize],
    }
    dispatch(addItemBurger(newItem));
  }
  
  
  return (
    <div className="burger-block">
      <div className="burger-block__image">
        <Link to={`burgers/${id}`} key={id}>
          <img src={imageUrl} alt="pizza-main"/>
        </Link>
        <div className="rating-result">
          {
            [...new Array(rating)].map((r, idx) => (
              <span className="active" key={idx}>{r}</span>
            ))
          }
          
          {
            [...new Array(5 - rating)].map((r, idx) => <span key={idx}>{r}</span>)
          }
        </div>
      </div>
      <h4 className="burger-block__title">{name}&nbsp;(#{id})</h4>
      <div className="burger-block__selector">
        <ul className="burger-block__selector-type">
          {types.map((type, idx) =>
            <li
              onClick={() => setActiveType(idx)}
              className={activeType === idx ? "active" : ''}
              key={type}
            >{burgerTypesArray[type]}</li>
          )}
        </ul>
        <ul className="burger-block__selector-size">
          {sizes.map((size, idx) =>
            <li
              onClick={() => setActiveSize(idx)}
              className={activeSize === idx ? 'active' : ''}
              key={size}
            > {size} см</li>
          )}
        </ul>
      </div>
      <div className="burger-block__bottom">
        <div className="burger-block__price">от <strong>{price}</strong>&nbsp;руб.</div>
        <button
          onClick={onClickAdd}
          className="burger-block__bottom-button"
        >add to cart
          {
            totalBurgersInCart &&
            <span className="burger-block__bottom-button-count">{count}</span>}
        </button>
      </div>
    </div>
  );
}
