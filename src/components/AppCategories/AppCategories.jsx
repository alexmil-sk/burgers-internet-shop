import React, {useState} from 'react';
import './AppCategories.scss';


function AppCategories() {
  
  const pizzaTypes = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  function onClickCategory(idx) {
    setActiveIndex(idx);
  }
  
  
  return (
    <div>
      <div className="categories">
        
        {
          pizzaTypes.map((pizza, idx) => (
            <button
              onClick={() => onClickCategory(idx)}
              className={activeIndex === idx ? 'active' : ''}
              key={pizza}
            >{pizza}</button>
          ))
        }
      </div>
    </div>
  );
}

export default AppCategories;
