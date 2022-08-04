import React from 'react';
import classes from './AppSearch.module.scss';
import {BsSearch} from "react-icons/bs";
import {GrClose} from "react-icons/gr";


function AppSearch({searchField, setSearchField}) {
  return (
    <div className={classes.search}>
      <span className={classes.icon}>
        <BsSearch/>
      </span>
      <input
        type="text"
        placeholder="Введите название пиццы..."
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <div className={classes.form}>
        {
          searchField ? <span
            onClick={() => setSearchField('')}
            className={classes.clearInput}
          ><GrClose /></span> : null
        }
      </div>
    </div>
  );
}

export default AppSearch;
