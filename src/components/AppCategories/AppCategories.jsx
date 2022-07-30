import React from 'react';
import './AppCategories.scss';


function AppCategories({categoryId, onClickCategory}) {
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  
  
  return (
    <div>
      <div className="categories">
        
        {
          categories.map((category, idx) => (
            <button
              onClick={() => onClickCategory(idx)}
              className={categoryId === idx ? 'active' : ''}
              key={category}
            >{category}</button>
          ))
        }
      </div>
    </div>
  );
}

export default AppCategories;
