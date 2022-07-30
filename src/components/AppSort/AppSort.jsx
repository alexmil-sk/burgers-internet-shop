import React, {useState} from 'react';
import './AppSort.scss';

function AppSort() {
  const sortTypes = ['популярности','цене','алфавиту'];
  
  const [toggleOpenPopup, setTogglesOpenPopup] = useState(false);
  const [activeSort, setActiveSort] = useState(sortTypes[0]);
  
  function getActiveSortType (sortType) {
    setActiveSort(sortType);
    setTogglesOpenPopup(false);
  }
  
  
  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__label-title">
          <strong >Сортировка по:</strong>
        </div>
        <div className="sort__label-btn" onClick={() => setTogglesOpenPopup(!toggleOpenPopup)}>
          <span >{activeSort}</span>
        </div>
      </div>
      <div className={toggleOpenPopup ? 'sort__popup' : 'sort__popup invisible' }>
          <ul>
            {
              sortTypes.map((sortType) =>
                <li
                  onClick={() => getActiveSortType (sortType)}
                  className={activeSort === sortType ? "active" : ''}
                  key={sortType}
                >{sortType}</li> )
            }
          </ul>
        </div>
      
      
      {/*{*/}
      {/*  isOpenPopup*/}
      {/*  ? (<div className="sort__popup">*/}
      {/*    <ul>*/}
      {/*      <li className="active">популярности</li>*/}
      {/*      <li>цене</li>*/}
      {/*      <li>алфавиту</li>*/}
      {/*    </ul>*/}
      {/*  </div>)*/}
      {/*  : null*/}
      {/*}*/}
    </div>
  );
}

export default AppSort;
