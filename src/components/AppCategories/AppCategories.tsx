import React from 'react';
import './AppCategories.scss';
import {useSelector, useDispatch} from "react-redux";
import {filterSelector, setCategoryId} from "../../redux-toolkit/filters/filtersSlice.js";
import {Category} from '../../@types/types';



export const AppCategories: React.FC = (): React.ReactComponentElement<any> => {
  
  const dispatch = useDispatch();
  
  const categories: Category[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  
  const {categoryId} = useSelector(filterSelector);
  
  function onClickCategory(idx: number): void {
    dispatch(setCategoryId(idx));
  }
  
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
