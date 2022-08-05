import React, {useCallback, useContext, useRef, useState} from 'react';
import classes from './AppSearch.module.scss';
import {BsSearch} from "react-icons/bs";
import {GrClose} from "react-icons/gr";
import {ContextSearchField} from "../../App.jsx";
import debounce from 'lodash.debounce';


function AppSearch() {
  
  const [localSearchField, setLocalSearchField] = useState('');
  const {searchField, setSearchField} = useContext(ContextSearchField);
  const inputRef = useRef(null);
  
  
  const updateSearchFieldHandler = useCallback(
    debounce((val) => {
      setSearchField(val);
    }, 1000), [])
  
  function onChangeInput(e) {
    setLocalSearchField(e.target.value);
    updateSearchFieldHandler(e.target.value);
  }
  
  function clearSearchField() {
    setLocalSearchField('');
    setSearchField('');
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
