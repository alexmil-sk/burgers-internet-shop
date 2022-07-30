import React from 'react';
import './AppSort.scss';
import {GrAscend, GrDescend} from "react-icons/gr";

function AppSort(props) {
  
  const {sortType, arrSortTypes, radioOrder, getRadioOrder, toggleSortHandle, toggleOpenPopup, getActiveSortType} = props;
  
  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__label-title">
          <strong>Сортировка по:</strong>
        </div>
        <div className="sort__label-btn" onClick={toggleSortHandle}>
          <span>{sortType.name}</span>
        </div>
        <div className="sort__label-radio_asc">
          <label>
            <input
              onChange={getRadioOrder}
              type="radio"
              name="radioOrder"
              value="desc"
            />
            <span ><GrAscend/></span>
          </label>
        </div>
        <div className="sort__label-radio_desc">
          <label>
            <input
              onChange={getRadioOrder}
              type="radio"
              name="radioOrder"
              value="asc"
              checked={radioOrder === 'asc'}
            />
            <span ><GrDescend/></span>
          </label>
        </div>
      </div>
      <div className={toggleOpenPopup ? 'sort__popup' : 'sort__popup invisible'}>
        <ul>
          {
            Object.keys(arrSortTypes).map(key =>
              <li
                onClick={() => getActiveSortType(arrSortTypes[key])}
                className={sortType.name === arrSortTypes[key].name ? "active" : ''}
                key={arrSortTypes[key].name}
              >{arrSortTypes[key].name}
              </li>)
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
