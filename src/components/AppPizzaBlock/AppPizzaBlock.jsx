import React, {useState} from 'react';
import './AppPizzaBlock.scss';
import {useDispatch, useSelector} from "react-redux";
import {addItemBurger, cartItemsSelector} from "../../redux-toolkit/slices/cartSlice.js";

const pizzaTypesArray = ['тонкое', 'традиционное'];


function AppPizzaBlock({...item}) {
  const {id, name, price, imageUrl, sizes, types} = item;
  
  const dispatch = useDispatch();
  const totalBurgersInCart = useSelector(cartItemsSelector(id));
  
  const count = totalBurgersInCart ? totalBurgersInCart.count : null;
  
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  
  function onClickAdd () {
    const newItem = {
      ...item,
      type: pizzaTypesArray[activeType],
      size: sizes[activeSize],
    }
    dispatch(addItemBurger(newItem));
  }
  
  
  return (
    <div className="pizza-block">
      <div className="pizza-block__image">
        <img src={imageUrl} alt="pizza-main"/>
      </div>
      <h4 className="pizza-block__title">{name}&nbsp;(#{id})</h4>
      <div className="pizza-block__selector">
        <ul className="pizza-block__selector-type">
          {types.map((type, idx) =>
            <li
              onClick={() => setActiveType(idx)}
              className={activeType === idx ? "active" : ''}
              key={type}
            >{pizzaTypesArray[type]}</li>
          )}
        </ul>
        <ul className="pizza-block__selector-size">
          {sizes.map((size, idx) =>
            <li
              onClick={() => setActiveSize(idx)}
              className={activeSize === idx ? 'active' : ''}
              key={size}
            > {size} см</li>
          )}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от <strong>{price}</strong>&nbsp;руб.</div>
        <button
          onClick={onClickAdd}
          className="pizza-block__bottom-button"
        >add to cart
          {
            totalBurgersInCart &&
            <span className="pizza-block__bottom-button-count">{count}</span>}
        </button>
      </div>
    </div>
  );
}

export default AppPizzaBlock;
