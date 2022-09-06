import React, {useState} from 'react';
import './AppPizzaBlock.scss';
import {useDispatch, useSelector} from "react-redux";
import {addItemBurger, cartItemsSelector} from "../../redux-toolkit/slices/cartSlice.js";
import {Link} from "react-router-dom";
import {AppPizzaBlockProps, BurgerInfo} from "../../@types/types";

const pizzaTypesArray: string[] = ['тонкое', 'традиционное'];


const AppPizzaBlock: React.FC<AppPizzaBlockProps> = ({...item}: AppPizzaBlockProps) => {
  const {id, name, price, imageUrl, sizes, types, rating} = item;
  
  const dispatch = useDispatch();
  const totalBurgersInCart = useSelector(cartItemsSelector(id));
  
  const count = totalBurgersInCart ? totalBurgersInCart.count : null;
  
  const [activeSize, setActiveSize] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(0);
  
  function onClickAdd() {
    const newItem: BurgerInfo = {
      ...item,
      type: pizzaTypesArray[activeType],
      size: sizes[activeSize],
    }
    dispatch(addItemBurger(newItem));
  }
  
  
  return (
    <div className="pizza-block">
      <div className="pizza-block__image">
        <Link to={`burgers/${id}`}>
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
