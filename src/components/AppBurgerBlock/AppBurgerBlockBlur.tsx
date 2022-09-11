import React from 'react';
import './AppBurgerBlock.scss';

export const AppBurgerBlockBlur: React.FC = () => {
  
  return (
    <div className="burger-block" style={{filter: 'blur(10px)'}}>
      <div className="burger-block__image">
        <img src="https://bigfood.club/media/burger-bigfood-bigfood-dostavka-burgerov-v-smolenske-1-600x400.jpg" alt="burger-main"/>
      </div>
      <h4 className="burger-block__title">Drunken cherry </h4>
      <div className="burger-block__selector">
        <ul className="burger-block__selector-type">
        <li className="active">crispy bun</li>
        <li>regular bun</li>
        </ul>
        <ul className="burger-block__selector-size">
          <li className="active">0.5cm</li>
          <li>1cm</li>
          <li>1.5cm</li>
        </ul>
      </div>
      <div className="burger-block__bottom">
        <div className="burger-block__price">от <strong>850</strong>&nbsp;руб.</div>
        <button
          className="burger-block__bottom-button"
        >Добавить
        </button>
      </div>
    </div>
  );
}
