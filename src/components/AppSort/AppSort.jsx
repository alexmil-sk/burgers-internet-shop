import React from 'react';
import './AppSort.scss';

function AppSort(props) {
  
  const {sortType, arrSortTypes, toggleSortHandle, toggleOpenPopup, getActiveSortType} = props;
  
  
  
  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__label-title">
          <strong >Сортировка по:</strong>
        </div>
        <div className="sort__label-btn" onClick={toggleSortHandle}>
          <span >{sortType}</span>
        </div>
      </div>
      <div className={toggleOpenPopup ? 'sort__popup' : 'sort__popup invisible' }>
          <ul>
            {
              arrSortTypes.map((type) =>
                <li
                  onClick={() => getActiveSortType (type)}
                  className={sortType === type ? "active" : ''}
                  key={type}
                >{type}</li> )
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
