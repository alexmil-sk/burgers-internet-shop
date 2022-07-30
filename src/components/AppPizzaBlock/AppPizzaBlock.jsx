import React, {useState} from 'react';
import './AppPizzaBlock.scss';

function AppPizzaBlock({...item}) {
  const {name, price, imageUrl, sizes, types} = item;
  
  const pizzaTypesArray = ['тонкое', 'традиционное'];
  
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  
  
  return (
    <div className="pizza-block">
      <div className="pizza-block__image">
        <img src={imageUrl} alt="pizza-main"/>
      </div>
      <h4 className="pizza-block__title">{name}</h4>
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
          onClick={() => console.log('count+')}
          className="pizza-block__bottom-button"
        >Добавить
          <span className="pizza-block__bottom-button-count">0</span>
        </button>
      </div>
    </div>
  );
}

export default AppPizzaBlock;
