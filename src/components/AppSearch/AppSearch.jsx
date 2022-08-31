import React, {useCallback, useRef, useState} from 'react';
import classes from './AppSearch.module.scss';
import {BsSearch} from "react-icons/bs";
import {GrClose} from "react-icons/gr";
import debounce from 'lodash.debounce';
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux-toolkit/slices/filtersSlice.js";


function AppSearch() {
  
  const dispatch = useDispatch();
  
  const [localSearchField, setLocalSearchField] = useState('');
  const inputRef = useRef(null);
  
  
  const updateSearchFieldHandler = useCallback(
    debounce((val) => {
      dispatch(setSearchValue(val));
    }, 1000), [])
  
  function onChangeInput(e) {
    setLocalSearchField(e.target.value);
    updateSearchFieldHandler(e.target.value);
  }
  
  function clearSearchField() {
    setLocalSearchField('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  }
  
  return (
    <div className={classes.search}>
      <span className={classes.icon}>
        <BsSearch/>
      </span>
      <input
        type="text"
        placeholder="Введите название пиццы..."
        value={localSearchField}
        ref={inputRef}
        onChange={onChangeInput}
      />
      <div className={classes.form}>
        {
          localSearchField ? <span
            onClick={clearSearchField}
            className={classes.clearInput}
          ><GrClose/></span> : null
        }
      </div>
    </div>
  );
}

export default AppSearch;
