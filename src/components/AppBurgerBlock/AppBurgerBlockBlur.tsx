import React from 'react';
import './AppBurgerBlock.scss';

export const AppBurgerBlockBlur: React.FC = () => {
  
  return (
    <div className="pizza-block" style={{filter: 'blur(10px)'}}>
      <div className="pizza-block__image">
        <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png" alt="pizza-main"/>
      </div>
      <h4 className="pizza-block__title">Кисло-сладский цыпленок</h4>
      <div className="pizza-block__selector">
        <ul className="pizza-block__selector-type">
        <li className="active">тонкая</li>
        <li>традиционная</li>
        </ul>
        <ul className="pizza-block__selector-size">
          <li className="active">26см</li>
          <li>30см</li>
          <li>40см</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от <strong>850</strong>&nbsp;руб.</div>
        <button
          className="pizza-block__bottom-button"
        >Добавить
          <span className="pizza-block__bottom-button-count">0</span>
        </button>
      </div>
    </div>
  );
}
